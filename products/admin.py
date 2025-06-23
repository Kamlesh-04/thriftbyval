from django.contrib import admin
from .models import Product, Rental, Swap

admin.site.register(Product)
admin.site.register(Rental)
admin.site.register(Swap)