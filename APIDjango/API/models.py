
from django.db import models


class Alumno(models.Model):
    id_alumno = models.AutoField(primary_key=True)
    p_nombre = models.CharField(max_length=20)
    s_nombre = models.CharField(max_length=20)
    ap_paterno = models.CharField(max_length=20)
    ap_materno = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    usuario_alum = models.CharField(max_length=20)
    contrasena_alum = models.CharField(max_length=25)

    class Meta:
        managed = False
        db_table = 'alumno'


class AsignaturaAlum(models.Model):
    id_asignatura = models.CharField(primary_key=True, max_length=30)
    nombre = models.CharField(max_length=60)

    class Meta:
        managed = False
        db_table = 'asignatura_alum'


class AsignaturaProf(models.Model):
    id_asign_prof = models.CharField(primary_key=True, max_length=30)
    nombre_asign_prof = models.CharField(max_length=60)

    class Meta:
        managed = False
        db_table = 'asignatura_prof'


class Profesor(models.Model):
    id_profesor = models.AutoField(primary_key=True)
    p_nombre_prof = models.CharField(max_length=20)
    s_nombre_prof = models.CharField(max_length=20)
    ap_paterno_prof = models.CharField(max_length=20)
    ap_materno_prof = models.CharField(max_length=20)
    email_prof = models.CharField(max_length=30)
    usuario_prof = models.CharField(max_length=20)
    contrasena_prof = models.CharField(max_length=25)

    class Meta:
        managed = False
        db_table = 'profesor'
