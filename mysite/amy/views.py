from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.urls import reverse
from django.template import loader

from .models import Image

# Create your views here.
def defaultView(request):
    return render(request, 'amy/2017birthday.html', {'img_set':Image.objects.all()})
