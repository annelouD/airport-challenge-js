'use strict';

class Airport{
  constructor(){
    this.hangar = []
  };
  
  planes() {
    return this.hangar;
  };

  allClear(plane){
    this.hangar.push(plane);
  };

};