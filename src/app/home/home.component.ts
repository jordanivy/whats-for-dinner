import { Component, OnInit } from '@angular/core';
import { ZService } from '../z-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dinnerForm: FormGroup;

  ngOnInit() { }
}