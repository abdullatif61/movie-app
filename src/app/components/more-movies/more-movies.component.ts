import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-movies',
  templateUrl: './more-movies.component.html',
  styleUrls: ['./more-movies.component.css']
})
export class MoreMoviesComponent implements OnInit {
  cardlar = [0];
  
  constructor() { 
     this.cardlar = [0,1,2,3,4,5,6,7,8,9,10,11];
  }

  ngOnInit(): void {
  }
  cardAlma(){
    let card =  [44,55,666,88,];
    this.cardlar = card;
    
    
    }
    

}
