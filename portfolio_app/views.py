from django.shortcuts import render
from .models import Project,ContactMessage

# Create your views here.

def home(request):
    return render(request,"home.html")

def about(request):
    return render(request,"about.html")

def projects(request):
    project = Project.objects.all()
    return render(request,"projects.html",{"projects":project})

def skills(request):
    return render(request,"skills.html")

def education(request):
    return render(request,"education.html")

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        ContactMessage.objects.create(name=name,email=email,message=message)
    return render(request,"contact.html")