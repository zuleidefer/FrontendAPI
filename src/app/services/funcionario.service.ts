import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionarioListar } from '../models/Funcionario';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  
  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) {}

  GetFuncionario(): Observable<Response<FuncionarioListar[]>>{
    
    return this.http.get<Response<FuncionarioListar[]>>(this.ApiUrl);
  }
}
