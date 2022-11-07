import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieCartComponent } from '../../components/movie-cart/movie-cart.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartEkleme() {
    alert("merhaba")
  }
  cardAlma() {
    let card = [44, 55, 666, 88,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.cardlar = card;


  }

  cardlar = [0];

  constructor() {
    this.cardlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }

  ngOnInit(): void {
  }
  

}
