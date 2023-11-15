import { Component, OnInit } from '@angular/core';
import { IReservation } from '../model/ireservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: IReservation[] = [
    {
      id: 1,
      vehicleBrand: 'Chevrolet',
      vehicleModel: 'Ônix',
      beginning: '12/02/2024',
      end: '15/02/2024',
    }
  ];
  displayedColumns = ['id', 'vehicleModel', 'vehicleBrand', 'beginning', 'end'];

  constructor() {}
  
  ngOnInit(): void {
  }
}
