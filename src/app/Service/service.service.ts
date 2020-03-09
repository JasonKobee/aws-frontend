import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://2wd06xo996.execute-api.us-east-1.amazonaws.com/prod/personas';
  //url = 'http://localhost:8080/personas';

  getPersonas() {
    return this.http.get<Persona[]>(this.url);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.url, persona);
  }

  getPersonaId(id: number) {
    return this.http.get<Persona>(this.url + "/listar/" + id);
  }

  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.url + "/actualizar/" + persona.id, persona);
  }

  deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.url + "/eliminar/" + persona.id);
  }
} 
