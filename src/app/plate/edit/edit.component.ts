import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurants/restaurant';
import { Plate } from '../plate';
import { PlateService } from '../plate.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  r: Restaurant = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    image: ''
  };
  
  PlateForm: Plate = {
    id: 0,
    name: '',
    cooktime: '',
      image: '',
      restaurant: this.r
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pS:PlateService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.pS.getById(id).subscribe((data) => {
      this.PlateForm = data;
    });
  }
 
  update() {
    this.pS.update(this.PlateForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/plate/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
