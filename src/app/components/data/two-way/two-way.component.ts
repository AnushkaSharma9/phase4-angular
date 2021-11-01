import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  public email:string ="";
  public message:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  public onInput($event:any) {
    console.log($event.target.value);
    this.email = $event.target.value;
  }
}