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

  clearTakeoff(plane){
    this._hangar.splice(this._hangar.indexOf(plane), 1 );
  };
};