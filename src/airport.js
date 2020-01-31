'use strict';

class Airport{
  constructor(){
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  allClear(plane){
    this._hangar.push(plane);
  };

};