import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
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


  }

  cargarDT() {
    this.httpClient.post(`${environment.urlApi}ProjectDetails/GetRegion`, '').subscribe((data: any) => {
      this.persons = Object.assign(data['Data']);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
