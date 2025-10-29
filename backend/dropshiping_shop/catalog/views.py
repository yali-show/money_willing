from rest_framework import generics, viewsets
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Product, Collection, PageText
from .serializers import ProductDetailSerializer, ProductShortSerializer, SpecificationSerializer
from django.shortcuts import get_object_or_404

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.select_related("specification").prefetch_related("collections").all()
    serializer_class = ProductDetailSerializer
    lookup_field = "id"

class ProductsByCollectionListAPIView(generics.ListAPIView):
    serializer_class = ProductShortSerializer

    def get_queryset(self):
        collection_id = self.kwargs.get("collection_id")
        return Product.objects.filter(collections__id=collection_id).order_by("-created_at").distinct()

class CollectionsListAPIView(generics.ListAPIView):
    queryset = Collection.objects.all()
    serializer_class = serializers.Serializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        data = [{"id": c.id, "name": c.name, "description": c.description, "products_count": c.products.count()} for c in qs]
        return Response(data)

