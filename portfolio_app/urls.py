from django.urls import path
from portfolio_app.views import home,about,projects,skills,education,contact

urlpatterns = [
    path('', views.home, name='home'),
    path("home/",home),
    path("about/",about),
    path('projects/',projects),
    path('skills/',skills),
    path('education/',education),
    path('contact/',contact),
]