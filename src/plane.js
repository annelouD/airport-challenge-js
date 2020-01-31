'use strict';
'use strict';

class Plane {
  constructor(){
    this._location;
  }
  

  land(airport){
    airport.clearLanding(this)
    this._location = airport;
  };

  takeOff(airport) {
    this._location.clearTakeOff()
  }
};
