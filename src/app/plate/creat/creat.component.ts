import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurants/restaurant';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { Plate } from '../plate';
import { PlateService } from '../plate.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

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

  allRestaurant: Restaurant[] = [];
 
  constructor(private pS:PlateService,
    private rS:RestaurantsService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.getRestaurants();

  }

  getRestaurants() {
    this.rS.get().subscribe((data) => {
      this.allRestaurant = data;
    });
  }
 
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
