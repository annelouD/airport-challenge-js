'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('Has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('Under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('Can clear planes for landing', function(){
      airport.clearLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('Can clear planes for takeoff', function(){
      airport.clearLanding(plane);
      airport.clearTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('Under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('Does not clear planes for landing', function(){
      expect(function(){ airport.clearLanding(plane); }).toThrowError('No Landing Due To Stormy Conditions');
    });
    it('Soes not clear planes for takeoff', function(){
      expect(function(){ airport.clearTakeOff(plane); }).toThrowError('No Take Off Due To Stormy Conditions');
    });
  });

});