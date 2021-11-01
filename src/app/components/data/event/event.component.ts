import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public product: any = {
    pid: 10100111,
    name: "Apple Macbook xyz series",
    price: 897845.45,
    status: false,
    desc: "It is a wonderfull laptop."
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("Event Triggered !");
    this.product.status = ! this.product.status;
  }

  public onInput($event:any){
    console.log("On Input Triggred !",$event.target.value);
  }
}