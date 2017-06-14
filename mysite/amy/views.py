from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.urls import reverse
from django.template import loader

from .models import ImageSet, Image

# Create your views here.
def defaultView(request):
    return render(request,
    'amy/2017birthday.html',
    {'img_set':ImageSet.objects.filter(set_name="set1")[0].image_set.all()})
    # {'img_set':Image.objects.all()})
