import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  //private stepper: Stepper;
  persons: any[] = [];

  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit(): void {
    debugger;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.cargarDT();
    //this.cargarStepper();
  }

  cargarDT() {
    this.httpClient.post(`${environment.urlApi}ProjectDetails/GetRegion`, '').subscribe((data: any) => {
      this.persons = Object.assign(data['Data']);
      this.dtTrigger.next();
    });
  }

  /*cargarStepper(){
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }*/

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  /*next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }*/


}
