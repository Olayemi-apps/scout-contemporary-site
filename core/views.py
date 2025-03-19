from django.conf import settings
from django.shortcuts import render, redirect
from . forms import BookingForm

def home(request):
    return render(request, "core/home.html")

def model_one(request):
    return render(request, "core/model_one.html", {"MEDIA_URL": settings.MEDIA_URL})

def model_two(request):
    return render(request, "core/model_two.html", {"MEDIA_URL": settings.MEDIA_URL})

def model_one_view(request):
    return render(request, 'core/model_one_view.html')

def model_two_view(request):
    return render(request, 'core/model_two_view.html')


def compare_models(request):
    # Car specifications (replace with real values)
    model_data = [
        {
            "name": "Scout Electric Model One",
            "range": "300 miles",
            "top_speed": "150 mph",
            "acceleration": "0-60 mph in 3.2s",
            "battery": "85 kWh",
            "price": "$50,000",
        },
        {
            "name": "Scout Electric Model Two",
            "range": "350 miles",
            "top_speed": "160 mph",
            "acceleration": "0-60 mph in 2.9s",
            "battery": "95 kWh",
            "price": "$60,000",
        },
    ]

    return render(request, "core/compare.html", {"models": model_data})


def book_test_drive(request):
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('booking_success')
    else:
        form = BookingForm()

    return render(request, "core/booking.html", {"form": form})

def booking_success(request):
    return render(request, "core/booking_success.html")

