from django.conf.urls import url

from . import views

app_name = 'amy' #identifier for {% url %} html tag --> {% url 'polls:detail' question.id %}
urlpatterns = [
    # default /polls/
    url(r'^$', views.defaultView, name='defaultView'),
    # ex: /polls/5/
    # url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
    # url(r'^(?P<pk>[0-9]+)/$', views.DetailView.as_view(), name='detail'), #Changed question_id --> PK because generic views expect such a format.
    # ex: /polls/5/results/
    # url(r'^(?P<pk>[0-9]+)/results/$', views.ResultsView.as_view(), name='results'),
    # url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
    # ex: /polls/5/vote/
    # url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
    # url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
]
