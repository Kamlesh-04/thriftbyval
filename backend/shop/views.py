from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product

class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all().values()
        return Response(products)

