from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=100)
    image = CloudinaryField('projects/')
    github_link = models.URLField(blank=True)
    demo_link = models.URLField(blank=True)

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    First_Name = models.CharField(max_length=255)
    Last_Name = models.CharField(max_length=255)
    email = models.EmailField()
    phon_number = models.IntegerField()
    message = models.TextField(blank=True)

    def __str__(self):
        return self.First_Name