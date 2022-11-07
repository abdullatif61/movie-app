import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { any } from 'cypress/types/bluebird';
import { List } from 'cypress/types/lodash';
import { MovieCartComponent } from '../movie-cart/movie-cart.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  sayi = Math.floor(Math.random() * 990);
  sayi2 = Math.floor(Math.random() * 90);
  sayi3 = Math.floor(Math.random() * 90);
  sayi4 = Math.floor(Math.random() * 90);
  cardlar:any = [];
  cartEkleme() {
    alert("merhaba")
  }
  cardAlma() {
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)
    this.cardlar.push(this.sayi)

    // this.cardlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,this.sayi,this.sayi2,this.sayi3,this.sayi4];
    // this.cardlar = this.cardlar + [this.sayi,this.sayi2,this.sayi3,this.sayi4]
  }

  constructor() {
    this.cardlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }

  ngOnInit(): void {
  }
  
 
}





