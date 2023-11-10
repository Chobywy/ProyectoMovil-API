from .models import *
from rest_framework import serializers

class AlumnoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = "__all__"

class ProfesorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = "__all__"
         
class AsignaturaAlumSerializers(serializers.ModelSerializer):
    class Meta:
        model = AsignaturaAlum
        fields = "__all__"

class AsignaturaProfSerializers(serializers.ModelSerializer):
    class Meta:
        model = AsignaturaProf
        fields = "__all__"
         