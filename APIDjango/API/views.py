from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from rest_framework import status
from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token





class AlumnoViewSet(generics.ListCreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializers

class ProfesorViewSet(generics.ListCreateAPIView):
    queryset = Profesor.objects.all()
    serializer_class = ProfesorSerializers

class AsignaturaAlumViewSet(generics.ListCreateAPIView):
    queryset = AsignaturaAlum.objects.all()
    serializer_class = AsignaturaAlumSerializers

class AsignaturaProfViewSet(generics.ListCreateAPIView):
    queryset = AsignaturaProf.objects.all()
    serializer_class = AsignaturaProfSerializers

class CerrarSesion(APIView):
    def post(self, request):
        logout(request)  
        return Response({'cerrado': True})


@api_view(['POST'])
def autenticar_usuario(request):
    return Response({'mensaje': 'Autenticación exitosa o fallida'})

@csrf_exempt
def autenticar_usuario(request):
    if request.method == 'POST':
        usuario = request.POST.get('usuario_alum')
        contrasena = request.POST.get('contrasena_alum')
        user = authenticate(usuario_alum=usuario, contrasena_alum=contrasena)
        print(usuario)
        print(contrasena)
        try:
            al = Alumno.objects.get(usuario_alum=usuario, contrasena_alum=contrasena)
            print("llego")
            print(al)
            if al is not None:
                print("permitido")
                return JsonResponse({'autenticado': True,'nombre':al.p_nombre,
                                     'correo':al.email, 'ap_alum':al.ap_paterno})
        except:
            print("no permitido")
            return JsonResponse({'autenticado': False})

    return JsonResponse({'error': 'Método no permitido'}, status=405)



@api_view(['POST'])
def autenticar_profesor(request):
    return Response({'mensaje': 'Autenticación exitosa o fallida'})

@csrf_exempt
def autenticar_profesor(request):
    if request.method == 'POST':
        usuario_p = request.POST.get('usuario_prof')
        contrasena_p = request.POST.get('contrasena_prof')
        user = authenticate(usuario_prof=usuario_p, contrasena_prof=contrasena_p)
        print(usuario_p)
        print(contrasena_p)
        try:
            pr = Profesor.objects.get(usuario_prof=usuario_p, contrasena_prof=contrasena_p)
            print("llego")
            print(pr)
            if pr is not None:
                print("permitido")
                return JsonResponse({'autenticado': True,'nombre_prof':pr.p_nombre_prof,
                                     'correo_prof':pr.email_prof, 'ap_prof':pr.ap_paterno_prof})
        except:
            print("no permitido")
            return JsonResponse({'autenticado': False})

    return JsonResponse({'error': 'Método no permitido'}, status=405)


