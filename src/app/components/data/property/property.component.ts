import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // data 
  public title:string ="Ecom Webapplication !";
  public username:string="Robbin Hood";
  public age:number= 32;
  public isMarried:boolean = false;

  public product:any  = {
      pid:10100111,
      name:"Apple Macbook xyz series",
      price:897845.45,
      status :true,
      desc : "It is a wonderfull laptop."
  };
  public orders:any  = ["Pizza Order","KFC Order","Dominos Order"];

  constructor() { }

  ngOnInit(): void {
  }

}
