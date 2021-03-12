import { Component, OnInit } from '@angular/core';
import { Projects, ProjectsIds } from 'src/app/core/models/projects.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-search-by-projects',
  templateUrl: './search-by-projects.component.html',
  styleUrls: ['./search-by-projects.component.css']
})
export class SearchByProjectsComponent implements OnInit {

  public isAll: boolean;
  public showFilter = true;
  public dropdownSettings = {};
  public dropdownList: any[];
  public LstProjectsxUser: Projects[];
  public LstCodigoProyectos = [];
  public selectedItems: ProjectsIds[];

  constructor(private serviceProjects: ProjectsService) { }

  ngOnInit(): void {
    this.ConfigurarMultiSelect();
    this.LoadProjectxUser();
  }

  ConfigurarMultiSelect() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'codigo',
      textField: 'nombre',
      selectAllText: 'Seleccionar Todo',
      unSelectAllText: 'Deseleccionar Todo',
      searchPlaceholderText: "Buscar",
      noDataAvailablePlaceholderText: "Datos no encontrados",
      itemsShowLimit: 1,
      allowSearchFilter: this.showFilter,
    };
  }

  LoadProjectxUser() {
    this.serviceProjects.getProjectxUser().subscribe(
      data => {
        this.dropdownList = Object.assign(data['Data']);
      }, error => console.log(error));
  }

  ConsultProjectsByUser() {

    
    let search = this.dropdownProperties();

    search.selectedValue.forEach(element => {
      this.LstCodigoProyectos.push(element.codigo)
    });

    if (search.Isvalidate) {
      this.serviceProjects.getProjectsByUser(this.LstCodigoProyectos, this.isAll).subscribe(response => {
        this.LstProjectsxUser = Object.assign(response['Data']);
      }, error => { console.log(error) });
    }
  }

  dropdownProperties() {
    let dropdown = {
      selectedValue: this.selectedItems,
      Isvalidate: this.selectedItems.length === 0 ? false : true,
    }
    return dropdown;
  }

  onSelectAll(items: any) {
    if (this.isAll) {
      this.isAll = false;
    } else {
      this.isAll = true;
    }
  }

  onDeselect(items: any) {
    this.isAll = false;
  }

  onItemSelect(selectedValue: any) {
    var filterArray = [];
    filterArray.push(selectedValue);
    var data = this.dropdownList.filter(function (item) {
      return filterArray.indexOf(item.NombreProyecto) > -1;
    });
  }



}
