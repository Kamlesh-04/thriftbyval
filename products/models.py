from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    is_available_for_rent = models.BooleanField(default=False)
    is_available_for_swap = models.BooleanField(default=False)
    image = models.ImageField(upload_to='products/', blank=True)

    def __str__(self):
        return self.name

class Rental(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    renter_email = models.EmailField()

class Swap(models.Model):
    product_offered = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='offered_swaps')
    product_requested = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='requested_swaps')
    contact_info = models.CharField(max_length=200)