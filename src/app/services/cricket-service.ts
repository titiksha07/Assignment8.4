import { Injectable } from '@angular/core';
import { ICricketList } from './../interface';
import { Logger } from "angular2-logger/core";

@Injectable()
export class CricketerService {

  cricketersList: ICricketList[] = [];

  /** Add cricketer in the array List. */
  addCricketer(cricketerDetail: ICricketList) {
    this.cricketersList.unshift(cricketerDetail);
  }
constructor( private _logger: Logger ){
 		this._logger.error('This is a priority level 1 error message...');
 		this._logger.warn('This is a priority level 2 warning message...');
 		this._logger.info('This is a priority level 3 warning message...');
 		this._logger.debug('This is a priority level 4 debug message...');
 		//this._logger.log('This is a priority level 5 log message...');
   }
  
  /**Get the cricket list from the array. */
     
  getCricket(): ICricketList[] {
 this._logger.warn('Retrieving Data');
    return this.cricketersList;
  }

  

}

