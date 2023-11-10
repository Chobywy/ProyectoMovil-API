from rest_framework import urlpatterns
from django.urls import re_path as url
from API import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns=[
    url(r'^api/alumno/$', views.AlumnoViewSet.as_view()),
    url(r'^api/profesor/$', views.ProfesorViewSet.as_view()),
    url(r'^api/asignatura/$', views.AsignaturaAlumViewSet.as_view()),
    url(r'^api/asignatura_prof/$', views.AsignaturaProfViewSet.as_view()),
    url('autenticar/', views.autenticar_usuario, name='autenticar_usuario'),
    url('autenticar_prof/', views.autenticar_profesor, name='autenticarProfesor'),
    url('cerrar-sesion/', views.CerrarSesion.as_view(), name='cerrar_sesion'),


]


urlpatterns = format_suffix_patterns(urlpatterns)
