import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ayrinti',
  templateUrl: './ayrinti.component.html',
  styleUrls: ['./ayrinti.component.css']
})
export class AyrintiComponent implements OnInit {
  // @Input() 

  constructor() { }

  ngOnInit(): void {
  }
  gelenId(){
    return "merhaba"
  }
 

}
