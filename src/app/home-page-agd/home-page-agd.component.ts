import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-agd',
  templateUrl: './home-page-agd.component.html',
  styleUrls: ['./home-page-agd.component.scss']
})
export class HomePageAgdComponent implements OnInit {
  itemList:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.itemList=[
      {id:'1',name:'Earring',qty:'45', img: '../../assets/icons/ear-ring.svg'},
      {id:'2',name:'Bracelet',qty:'30', img: '../../assets/icons/ring.svg'},
      {id:'3',name:'Necklace',qty:'30', img: '../../assets/icons/neck-chain.svg'},
      {id:'4',name:'Rings',qty:'40', img: '../../assets/icons/ring1.svg'},
      {id:'5',name:'Pendants',qty:'40', img: '../../assets/icons/ring2.svg'},
      {id:'6',name:'Nose Pins',qty:'45', img: '../../assets/icons/ring3.svg'}
    ]
  }

}
