'use strict';

class Plane {
  
  land(airport){
    airport.clearLanding(this)
  };

  takeOff(airport){
    airport.clearTakeoff(this)
  };
};
