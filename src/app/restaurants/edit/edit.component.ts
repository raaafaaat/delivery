import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  RestaurantForm: Restaurant = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    image: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private rS:RestaurantsService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.rS.getById(id).subscribe((data) => {
      this.RestaurantForm = data;
    });
  }
 
  update() {
    this.rS.update(this.RestaurantForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
