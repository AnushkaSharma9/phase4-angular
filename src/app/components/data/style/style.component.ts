import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  // data 
  public title:string ="Ecom Webapplication !";
  public username:string="Robbin Hood";
  public age:number= 32;
  public isMarried:boolean = true;

  public colors:any = {
    red:'#FF0000',
    green:'#00FF00',
    blue:'#0000FF'
  }

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