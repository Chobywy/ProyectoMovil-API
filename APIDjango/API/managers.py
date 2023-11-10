from django.contrib.auth.models import BaseUserManager

class AlumnoManager(BaseUserManager):
    def create_user(self, usuario_alum, password=None, **extra_fields):
        if not usuario_alum:
            raise ValueError('El campo usuario_alum debe estar configurado.')
        user = self.model(usuario_alum=usuario_alum, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, usuario_alum, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(usuario_alum, password, **extra_fields)
