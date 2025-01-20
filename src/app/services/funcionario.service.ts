import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as rxjs from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export default class FuncionarioService {

  private ApiURL = '${environment.baseApiURL}/Funcionario' 

  constructor ( private http: HttpClient) {}

  
}
