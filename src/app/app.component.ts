import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import {CriketerDropDownService} from './services/cricketdropdown-service'
import { CricketerService } from './services/cricket-service';
import { ICricketList } from './interface';
import {IPlayerType} from './cricket-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CricketerService],
  encapsulation: ViewEncapsulation.Emulated,
  
})

export class AppComponent implements OnInit {
  /**Public variable */
  cricketersArray: ICricketList[] = []
  playerType: IPlayerType[]= [];
  
  firstName: string;
  lastName: string;
  favShot: string;
   batsmanBowler:string;
  cricketerDetail: ICricketList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _cricketService: CricketerService,private _cricketdropdownService:CriketerDropDownService) { }

  ngOnInit() {
    this.playerType=this._cricketdropdownService.getPlayerType();
  }

  /**Add a cricket */
  addCricketer(first, last, shot, batsmanBowler) {

    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
       batsmanBowler: batsmanBowler
    };

    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }
if(cricketersArray){
  
}
}

