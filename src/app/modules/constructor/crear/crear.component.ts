import { LoaderService } from 'src/app/core/services/loader.service';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { ContactoService } from 'src/app/core/services/contacto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  private stepper: Stepper;
  public objForm: FormGroup;
  public objCreateConstructor: FormGroup;
  public submitted = false;
  public ListaRegiones: String[];
  public ListaTipoContacto: [];

  constructor(private formBuilder: FormBuilder, private loader: LoaderService, private servicioProyecto :ProyectoService, private servicioContacto :ContactoService) {
    this.createForm();
   }

  ngOnInit(): void {

    this.loadLists();

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  createForm() {
    this.objForm = this.formBuilder.group({
      txtNombreConstructora: ['', Validators.required]
    });

    this.objCreateConstructor = this.formBuilder.group({
      cmbTipoDocumento: ['', Validators.required],
      txtNit: [],
      txtRut: [],
      txtFideicomiso: [],

      txtNombreConstructora: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]],
      txtInstrumentador: ['', Validators.required],
      chkEstado: [''],

      txtNombreContacto: ['', [Validators.required, Validators.maxLength(50)]],
      cmbRegion: ['', [Validators.required]],
      txtDireccion: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      txtEmail: ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      txtTelefonoFijo: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      txtCelular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      cmbTipoContacto: ['', [Validators.required]]
    });
  }

  loadLists() {
    this.loader.display(true);
    this.servicioProyecto.getAllRegion().subscribe(responseregion => {
      this.ListaRegiones = Object.assign(responseregion['Data']) ;
      console.log(this.ListaRegiones)  
    }, error => console.log(error));

    

    this.servicioContacto.getAllTypeContacts().subscribe(responsecontacto => {
      this.ListaTipoContacto = Object.assign(responsecontacto['Data']);
      console.log(this.ListaTipoContacto)
      
    },error => console.log(error));


  }


  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }

  createConstructionCompany() {
    console.log(this.objCreateConstructor.value);

  }

  validarNumeros(event: any) {
    const pattern = /^[0-9]+$/;
    const inputChar = String.fromCharCode((event as KeyboardEvent).charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  showInput() {
    let getSelectValue = this.objCreateConstructor.controls['cmbTipoDocumento'].value;
    if (getSelectValue == "NIT") {

      this.objCreateConstructor.get('txtRut').reset();
      this.objCreateConstructor.get('txtFideicomiso').reset();

      this.objCreateConstructor.get('txtRut').clearValidators();
      this.objCreateConstructor.get('txtRut').updateValueAndValidity();
      this.objCreateConstructor.get('txtFideicomiso').clearValidators();
      this.objCreateConstructor.get('txtFideicomiso').updateValueAndValidity();

      this.objCreateConstructor.get('txtNit').setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
      this.objCreateConstructor.get('txtNit').updateValueAndValidity();

      document.getElementById("inputNit").style.display = "inline";
      document.getElementById("inputRut").style.display = "none";
      document.getElementById("inputFideicomiso").style.display = "none";

    } else if (getSelectValue == "RUT") {

      this.objCreateConstructor.get('txtNit').reset();
      this.objCreateConstructor.get('txtFideicomiso').reset();

      this.objCreateConstructor.get('txtNit').clearValidators();
      this.objCreateConstructor.get('txtNit').updateValueAndValidity();
      this.objCreateConstructor.get('txtFideicomiso').clearValidators();
      this.objCreateConstructor.get('txtFideicomiso').updateValueAndValidity();

      this.objCreateConstructor.get('txtRut').setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
      this.objCreateConstructor.get('txtRut').updateValueAndValidity();
      document.getElementById("inputNit").style.display = "none";
      document.getElementById("inputRut").style.display = "inline";
      document.getElementById("inputFideicomiso").style.display = "none";

    } else if (getSelectValue == "FIDEICOMISO") {

      this.objCreateConstructor.get('txtNit').reset();
      this.objCreateConstructor.get('txtRut').reset();

      this.objCreateConstructor.get('txtNit').clearValidators();
      this.objCreateConstructor.get('txtNit').updateValueAndValidity();
      this.objCreateConstructor.get('txtRut').clearValidators();
      this.objCreateConstructor.get('txtRut').updateValueAndValidity();

      this.objCreateConstructor.get('txtFideicomiso').setValidators([Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
      this.objCreateConstructor.get('txtFideicomiso').updateValueAndValidity();

      document.getElementById("inputNit").style.display = "none";
      document.getElementById("inputRut").style.display = "none";
      document.getElementById("inputFideicomiso").style.display = "inline";
    }
  }

  

}
