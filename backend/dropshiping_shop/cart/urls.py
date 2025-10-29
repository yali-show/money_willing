from django.urls import path
from .views import CartView, CartItemDeleteView, CartClearView

urlpatterns = [
    path("", CartView.as_view(), name="cart"),
    path("remove/<int:product_id>/", CartItemDeleteView.as_view(), name="cart-remove"),
    path("clear/", CartClearView.as_view(), name="cart-clear"),
]

