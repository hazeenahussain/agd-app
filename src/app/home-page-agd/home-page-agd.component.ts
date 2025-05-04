import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-agd',
  templateUrl: './home-page-agd.component.html',
  styleUrls: ['./home-page-agd.component.scss']
})

export class HomePageAgdComponent implements OnInit {
  itemList:any[]=[];
  neckItemList: any[]=[];
  imageList: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.itemList=[
      {id:'1',name:'Earring',qty:'45', img: '../../assets/icons/ear-ring.svg'},
      {id:'2',name:'Bracelet',qty:'30', img: '../../assets/icons/ring.svg'},
      {id:'3',name:'Necklace',qty:'30', img: '../../assets/icons/neck-chain.svg'},
      {id:'4',name:'Rings',qty:'40', img: '../../assets/icons/ring1.svg'},
      {id:'5',name:'Pendants',qty:'40', img: '../../assets/icons/ring2.svg'},
      {id:'6',name:'Nose Pins',qty:'45', img: '../../assets/icons/ring3.svg'}
    ];
    this.neckItemList=[
      {id:'1',name:'X Hop Earrings',amt:'$25.00 USD', mrp:'$15.00 USD',img: '../../assets/icons/neck3.svg'},
      {id:'2',name:'B Hop Necklace',amt:'$25.00 USD', mrp:'$30.00 USD',img: '../../assets/icons/neck1.svg'},
      {id:'3',name:'VW Hop Necklace',amt:'$25.00 USD',mrp:'$15.00 USD',img: '../../assets/icons/neck5.svg'},
      {id:'4',name:'Bangles Top rated',amt:'$25.00 USD',mrp:'$15.00 USD', img: '../../assets/icons/neck4.svg'}     
    ];
    this.imageList=[
      {id:'1',img: '../../assets/icons/image 3.svg'},
      {id:'2',img: '../../assets/icons/image 4.svg'},
      {id:'3',img: '../../assets/icons/image 5.svg'},
      {id:'4',img: '../../assets/icons/image 6.svg'}, 
      {id:'4',img: '../../assets/icons/image7.svg'}, 
      {id:'4',img: '../../assets/icons/image 8.svg'}, 
      {id:'4',img: '../../assets/icons/image 9.svg'}, 
      {id:'4',img: '../../assets/icons/image 10.svg'}, 
    ];
  }

}
