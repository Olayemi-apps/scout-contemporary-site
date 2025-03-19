from django.db import models

class Booking(models.Model):
    MODEL_CHOICES = [
        ("Model One", "Scout Electric Model One"),
        ("Model Two", "Scout Electric Model Two"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    model = models.CharField(max_length=20, choices=MODEL_CHOICES)
    test_drive_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.model} on {self.test_drive_date}"


# Create your models here.
