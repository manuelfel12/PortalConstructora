import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  private stepper: Stepper;
  constructor() { }
  public isAll: boolean;
  objFormCreate: FormGroup;

  ngOnInit(): void {

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
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

  viewPsw() {
    $(".toggle-password").show(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(this).parent().find("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  viewConfirmPsw() {
    $(".toggle-confirmPassword").show(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(this).parent().find("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }


  onSelectAll(items: any) {
    if (this.isAll) {
      this.isAll = false;
      this.objFormCreate.controls['cmbConstructora'].setValue('');
    } else {
      this.isAll = true;
      this.objFormCreate.controls['cmbConstructora'].setValue(items);
    }
  }

}
