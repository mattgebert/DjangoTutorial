from django.shortcuts import render
from django.http import HttpResponse
from .models import Question

def index(request):
    latest_question_list=Question.objects.order_by("pub_date")[:5]
    output = ",\n ".join([q.question_text for q in latest_question_list])
    return HttpResponse(output)
    # return HttpResponse("Hello, World. You're at the polls index.")

# Create your views here.

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on quesiton %s" % question_id)


def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)
