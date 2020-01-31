'use strict';

class Airport{
  constructor(){
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  clearLanding(plane){
    this._hangar.push(plane);
  };

  clearTakeOff(plane){
   this._hangar.splice(this._hangar.indexOf(plane), 1 );
  };
  
};