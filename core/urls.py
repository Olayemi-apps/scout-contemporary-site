from django.urls import path
from .views import home, model_one, model_two, model_one_view, model_two_view, compare_models, book_test_drive, booking_success

urlpatterns = [
    path("", home, name="home"),
    path("model-one/", model_one, name="model_one"),
    path("model-two/", model_two, name="model_two"),
    path('model-one/view/', model_one_view, name='model_one_view'),
    path('model-two/view/', model_two_view, name='model_two_view'),
    path("compare/", compare_models, name="compare_models"),
    path("book-test-drive/", book_test_drive, name="book_test_drive"),
    path("booking-success/", booking_success, name="booking_success"),
]