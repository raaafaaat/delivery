import { Component, OnInit } from '@angular/core';
import { Plate } from '../plate';
import { PlateService } from '../plate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPlate: Plate[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private pS: PlateService) {}
 
  ngOnInit(): void {

    this.deleteModal = new (window as any).bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
    get() {
      this.pS.get().subscribe((data) => {
        this.allPlate = data;
      });
      
    }

    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
    delete() {
      this.pS.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.allPlate = this.allPlate.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
    }

  }
 

