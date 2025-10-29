from rest_framework import generics, serializers
from .models import Product, Collection, Specification, PageText

class SpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specification
        fields = "__all__"

class ProductDetailSerializer(serializers.ModelSerializer):
    specification = SpecificationSerializer()
    collections = serializers.StringRelatedField(many=True)
    class Meta:
        model = Product
        fields = ["id","title","images_url","market_price","offert_price","profit",
                  "description","collections","stock_state","specification","created_at","updated_at"]

class ProductShortSerializer(serializers.ModelSerializer):
    one_image = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ["id","title","one_image","description","offert_price","market_price","stock_state"]

    def get_one_image(self, obj):
        return obj.main_image()

