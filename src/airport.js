'use strict';

class Airport{
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  }
  planes() {
    return this._hangar;
  }
  clearLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('No Landing Due To Stormy Conditions');
    }
    this._hangar.push(plane);
  };
  clearTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('No Take Off Due To Stormy Conditions');
    }
    this._hangar.splice(this._hangar.indexOf(plane), 1 );
  }
  isStormy() {
    return false;
  }
};
    