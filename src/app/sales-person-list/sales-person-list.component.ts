import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000), 
    new SalesPerson("Jane", "doe", "Jane.doe@luv2code.com", 90000), 
    new SalesPerson("Hiro", "Lee", "Hiro.lee@luv2code.com", 120000), 
    new SalesPerson("Dante", "Basco", "Dante.basco@luv2code.com", 85000), 
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
