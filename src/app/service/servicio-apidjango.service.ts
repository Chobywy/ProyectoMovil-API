import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AlumnoAPI } from '../interface/alumno-api';
import { ProfesorAPI } from '../interface/profesor-api';
import { LoginI } from '../../app/modelos/login.interface'
import { ResponseI } from '../../app/modelos/response.interface'
import { Observable } from 'rxjs';
import { AsignaturaAlumAPI } from '../interface/api-asig-alum';
import { AsignaturaProfAPI } from '../interface/api-asig-prof';
@Injectable({
  providedIn: 'root'
})
export class ServicioAPIDjangoService {

  constructor(private http:HttpClient) { 
  }
  loginProfesor(form:LoginI):Observable<ResponseI>{
    let direccion=this.urls+"/api/profesor/"
    return this.http.post<ResponseI>(direccion,form)

  }

  url:string = "http://127.0.0.1:8000"
  urlAlumnoRec:string=this.url+"/api/alumno/"
  listar(){
    return this.http.get<AlumnoAPI[]>(this.urlAlumnoRec)
  }
  urls:string = "http://127.0.0.1:8000"
  urlProfRec:string=this.urls+"/api/profesor/"
  listarprofe(){
    return this.http.get<ProfesorAPI[]>(this.urlProfRec)
  }
  urlAsig:string = "http://127.0.0.1:8000"
  urlAsigAlum:string=this.urlAsig+"/api/asignatura/"
  listarAsig(){
    return this.http.get<AsignaturaAlumAPI[]>(this.urlAsigAlum)
  }
  urlAsigProf:string = "http://127.0.0.1:8000"
  urlAsignProf:string=this.urlAsigProf+"/api/asignatura_profe/"
  listarAsigProf(){
    return this.http.get<AsignaturaProfAPI[]>(this.urlAsignProf)
  }
  getDatosAPI() {
    return this.http.get('http://127.0.0.1:8000/api/alumno/');
  }

  autenticarUsuario(usuario: string, contrasena: string) {
    console.log('usuaurio:'+usuario)
    const formData = new FormData();
    formData.append("usuario_alum",usuario)
    formData.append("contrasena_alum",contrasena)
    //return this.http.post('http://127.0.0.1:8000/api/alumno/autenticar/', { "usuario_alum": usuario, "contrasena_alum": contrasena });
    return this.http.post('http://127.0.0.1:8000/api/alumno/autenticar/', formData);
  }
  autenticarProfesor(usuario_p: string, contrasena_p: string) {
    console.log('usuaurio:'+usuario_p)
    const formData = new FormData();
    formData.append("usuario_prof",usuario_p)
    formData.append("contrasena_prof",contrasena_p)
    //return this.http.post('http://127.0.0.1:8000/api/alumno/autenticar/', { "usuario_alum": usuario, "contrasena_alum": contrasena });
    return this.http.post('http://127.0.0.1:8000/api/profesor/autenticar_prof/', formData);
  }
}

