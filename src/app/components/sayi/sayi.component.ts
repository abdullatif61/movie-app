import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-sayi',
  templateUrl: './sayi.component.html',
  styleUrls: ['./sayi.component.css']
})
export class SayiComponent implements OnInit {
  constructor(private http:HttpClient) {}
  getData(){
    let url = "https://api.themoviedb.org/3/movie/550?api_key=422ae0dba46fe300a8813fb26f2edf04"
    return this.http.get(url)
  }

  ngOnInit(): void {
    this.getData().pipe(map((data)=>{
      console.log(data)

    })).subscribe()
  }

}
