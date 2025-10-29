# cart/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from catalog.models import Product
from .utils import add_item, get_cart, remove_item, clear_cart
import uuid

def _user_key(request):
    if request.user.is_authenticated:
        return f"user:{request.user.id}", None

    if not request.session.session_key:
        request.session.create()
    return f"session:{request.session.session_key}", request.session.session_key

class CartView(APIView):
    def get(self, request):
        user_key, _ = _user_key(request)
        cart = get_cart(user_key)
        return Response({"items": cart})

    def post(self, request):
        user_key, anon_id = _user_key(request)
        product_id = request.data.get("product_id")
        qty = int(request.data.get("qty", 1))

        product = Product.objects.filter(id=product_id, stock_state=True).first()
        if not product:
            return Response({"error": "Product not found or out of stock"}, status=404)

        snapshot = {
            "title": product.title,
            "price": product.offert_price,
            "image": product.main_image(),
        }
        add_item(user_key, product_id, qty, snapshot)

        response = Response({"message": "Added to cart"}, status=201)
        if anon_id:
            response.set_cookie("sessionid", anon_id, max_age=30*24*3600)
        return response

class CartItemDeleteView(APIView):
    def delete(self, request, product_id):
        user_key = _user_key(request)
        remove_item(user_key, product_id)
        response = Response({"message": "Removed"}, status=200)

        return response


class CartClearView(APIView):
    def delete(self, request):
        user_key = _user_key(request)
        clear_cart(user_key)
        response = Response({"message": "Cart cleared"}, status=200)

        return response

