from django.shortcuts import render
from .models import Project,ContactMessage

# Create your views here.


def index(request):
    projects = Project.objects.all()
    obj = {"projects":projects}

    if request.method == "POST":
        First_Name = request.POST.get("First_Name")
        Last_Name = request.POST.get("Last_Name")
        email = request.POST.get("email")
        phon_number = request.POST.get("phon_number")
        message = request.POST.get("message")
        ContactMessage.objects.create(First_Name=First_Name,Last_Name=Last_Name,email=email,phon_number=phon_number,message=message)
    return render(request,"index.html",obj)
