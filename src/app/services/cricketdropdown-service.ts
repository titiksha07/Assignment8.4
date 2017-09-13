import { Injectable } from '@angular/core';
import { IPlayerType } from './../cricket-interface';

@Injectable()
export class CriketerDropDownService {

  playerType: IPlayerType[] = [];

  /** Get the player Type */
  getPlayerType() {
    return this.playerType = [{
      id: 1,
      type: 'Mr'
    },
    {
      id: 1,
      type: 'Mrs'
    }
    ];
  }

}
