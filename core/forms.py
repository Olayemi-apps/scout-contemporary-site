from django import forms
from .models import Booking

class BookingForm(forms.ModelForm):
    test_drive_date = forms.DateField(
        widget=forms.DateInput(attrs={"type": "date"})
    )

    class Meta:
        model = Booking
        fields = ["name", "email", "model", "test_drive_date"]
