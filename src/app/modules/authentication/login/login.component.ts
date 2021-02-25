import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { UserService } from 'src/app/core/services/user/user.service';
import jwt_decode from "jwt-decode";
// import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  userData: any;

  constructor(private userService: UserService, private authService: MsalService, private router: Router) { }

  ngOnInit(): void {
  }


  onLogin() {
    if (this.isLoggedIn) {
      this.authService.logout();
    } else {
      this.authService
        .loginPopup()
        .then((result) => {

          console.log("Login success: ", result);

          let EstadoUsuario = result.idTokenClaims['state'];
          let usuarioB2C = result.idTokenClaims['family_name'];

          let tokenB2C = result.idToken['rawIdToken'];

          this.getTokenFromAPI(usuarioB2C, EstadoUsuario);

        })
        .catch((err) => {
          console.log("Login failed : ", JSON.stringify(err));
        });
    }
  }

  getTokenFromAPI(usuarioB2C: string, EstadoUsuario: string) {
    debugger;
    if (EstadoUsuario) {

      this.userService.getTokenAPI(usuarioB2C).subscribe(response => {

        this.userData = response;
        if (this.userData.Data.key == "99") {
          let decoded = jwt_decode(this.userData.Data.value);
          
          console.log('decoded', decoded['unique_name']);
          
          if (decoded != undefined) {
            debugger;
            if (decoded['unique_name'] == usuarioB2C) {

              // const userToken: UserToken = data.result.authToken;
              // userToken.active_status = userToken.active_status ?? false;
              // localStorage.setItem("prw_user", JSON.stringify(userToken));

              this.userService.setUserLoggedIn(this.userData.Data.value);
              this.validateRole(decoded['role']);
            }
          }
        }

      });

    }
  }


  validateRole(role: string) {
    switch (role) {
      case "1": {
        //statements; 
        break;
      }
      case "4": {
        this.router.navigate([""]);
        break;
      }
      case "8": {
        //statements; 
        break;
      }
      case "9": {
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }




}
