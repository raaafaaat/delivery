import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allRestaurant: Restaurant[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private rS: RestaurantsService) {}
 
  ngOnInit(): void {

    this.deleteModal = new (window as any).bootstrap.Modal(
      document.getElementById('deleteModal')
    );


    this.get();
  }
 
  get() {
    this.rS.get().subscribe((data) => {
      this.allRestaurant = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.rS.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allRestaurant = this.allRestaurant.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }


}


