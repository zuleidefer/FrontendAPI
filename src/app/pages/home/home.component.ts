import { Component, OnInit } from '@angular/core';
import { FuncionarioListar } from '../../models/Funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  funcionarios: 
  FuncionarioListar[] = [];
  funcionariosGeral: FuncionarioListar[] = [];
  constructor(private serviceFuncionario:FuncionarioService){}
  
  ngOnInit(): void {
    this.serviceFuncionario.GetFuncionario().subscribe(response => [ 
      
      
      this.funcionarios = response.dados,
      this.funcionariosGeral = response.dados,

    ])
  
  }

  search(event:Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase;
    console.log("TARGET", target)
    console.log("VALUE", value)
  }

}
