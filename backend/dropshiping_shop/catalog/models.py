from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MinValueValidator

class Specification(models.Model):
    movement = models.CharField(max_length=200, blank=True)
    box_material = models.CharField(max_length=200, blank=True)
    diameter = models.PositiveIntegerField(null=True, blank=True, validators=[MinValueValidator(0)])
    water_resist = models.PositiveIntegerField(null=True, blank=True)
    glass = models.CharField(max_length=200, blank=True)
    bracelet = models.CharField(max_length=200, blank=True)

    def __str__(self):
        parts = [self.movement or '', self.box_material or '']
        return " / ".join([p for p in parts if p])

class Collection(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=300)
    images_url = models.JSONField(default=list, blank=True)
    market_price = models.PositiveIntegerField()
    offert_price = models.PositiveIntegerField()
    profit = models.IntegerField()
    description = models.TextField(blank=True)
    collections = models.ManyToManyField(Collection, related_name="products", blank=True)
    stock_state = models.BooleanField(default=True)
    specification = models.OneToOneField(Specification, on_delete=models.SET_NULL, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        try:
            self.profit = int(self.offert_price) - int(self.market_price)
        except Exception:
            pass
        super().save(*args, **kwargs)

    def main_image(self):
        return self.images_url[0] if self.images_url else None

    def __str__(self):
        return self.title

class PageText(models.Model):
    title = models.CharField(max_length=300)
    text = models.TextField()
    page = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title

