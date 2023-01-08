import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plate } from '../plate';
import { PlateService } from '../plate.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  PlateForm: Plate = {
    id: 0,
    name: '',
    cooktime: '',
    image: ''
  };
 
  constructor(private pS:PlateService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.pS.create(this.PlateForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/plate/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
