from django.contrib import admin
from .models import Product, Collection, Specification, PageText

@admin.register(Specification)
class SpecificationAdmin(admin.ModelAdmin):
    list_display = ("id", "movement", "box_material", "diameter")

class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "offert_price", "market_price", "stock_state")
    list_filter = ("stock_state", "collections")
    search_fields = ("title", "description")
    readonly_fields = ("profit", "created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("title", "description", "images_url")}),
        ("Pricing", {"fields": ("market_price", "offert_price", "profit")}),
        ("Relations", {"fields": ("collections", "specification", "stock_state")}),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )
    filter_horizontal = ("collections",)

    def get_readonly_fields(self, request, obj=None):
        ro = list(self.readonly_fields)
        if obj is None:
            ro.remove("profit") if "profit" in ro else None
        return ro

admin.site.register(Product, ProductAdmin)
admin.site.register(Collection)
admin.site.register(PageText)

