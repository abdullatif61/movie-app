import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

interface IData {
  original_title: string
  poster_path: string
  overview: string
  vote_average: number

} 

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.css']
})
export class MovieCartComponent implements OnInit {
  @Input()   movie: any;
  sayi =  Math.floor(Math.random() * (650-545)+545);
  Puan = Math.ceil(Math.random() * (10));

  cardItem = {

    resim: "" + this.sayi + "/800/400",
    baslik: "",
    aciklama: "film açıklaması",
    id: this.sayi,
    puan: this.Puan


  }
  apiData!: IData

  constructor(private http:HttpClient) {}
  getData(){
    let url = "https://api.themoviedb.org/3/movie/"+this.sayi +"?api_key=422ae0dba46fe300a8813fb26f2edf04"
    return this.http.get(url)
  }


  ngOnInit(): void {
    this.getData().pipe(map((data:any)=>{
      console.log(data)
      this.apiData = data

    })).subscribe()
  } 
  getRandomInt() {
    return Math.floor(Math.random() * 10);
  }
  public idGonder(id:number){
    let gonderilenId = id
  }
  

}
