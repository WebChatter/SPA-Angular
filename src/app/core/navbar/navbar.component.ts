import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/online/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
