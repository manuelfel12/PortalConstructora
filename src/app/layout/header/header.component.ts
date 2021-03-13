import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName: string;

  constructor(private authService: AuthService) {     
  }

  ngOnInit(): void {
    this.getUserNameLoggedIn();
  }

  getUserNameLoggedIn() {
    this.authService.getUserNameLoggedIn().subscribe(response => {
        this.userName = Object.assign(response);        
    });
}

}
