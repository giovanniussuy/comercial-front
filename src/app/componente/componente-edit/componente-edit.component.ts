import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-componente-edit',
  templateUrl: './componente-edit.component.html',
  styleUrls: ['./componente-edit.component.css']
})
export class ComponenteEditComponent implements OnInit {

  componente: any = {};

  id: string;

  @ViewChild('formEditUser', { static: true }) 
  formEditUser: NgForm;

  constructor(private service: ComponenteService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    if(this.id){
      this.service.getById(this.id).subscribe(componente => this.componente = componente);
    }
  }

  ngOnInit() {
  }

  cancel() {
    this.back()
  }

  save() {


    if(this.id){
      this.service.update(this.componente, this.id).subscribe(()=> this.back());
    } else {
      this.criarComponente();
      this.service.create(this.componente).subscribe(() => this.back());
    }
  }

  criarComponente(){
    this.componente = {
      data: this.componente.data,
      nutrientes: [{
        tipo: "NITROGENIO",
        valor: 0,
        valorIdeal: 0
      }]
  }
  }
  saveNew(){
    this.criarComponente();
    this.service.create(this.componente).subscribe(() => this.initialize());

  }

  back(){
    this.router.navigateByUrl(`componente`);
  }

  initialize(){
    this.componente = {};
  }
}
