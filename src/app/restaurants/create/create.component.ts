import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  RestaurantForm: Restaurant = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    image: ''
  };
 
  constructor(private rS:RestaurantsService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.rS.create(this.RestaurantForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
