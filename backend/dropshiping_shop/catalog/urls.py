from django.urls import path
from .views import ProductDetailAPIView, ProductsByCollectionListAPIView, CollectionsListAPIView

urlpatterns = [
    path("products/<int:id>/", ProductDetailAPIView.as_view(), name="product-detail"),
    path("collections/<int:collection_id>/products/", ProductsByCollectionListAPIView.as_view(), name="collection-products"),
    path("collections/", CollectionsListAPIView.as_view(), name="collections-list"),
]

