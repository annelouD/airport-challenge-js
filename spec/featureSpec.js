'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('Plane can land at Airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('Plan can take off from Airport', function(){
      plane.land(airport)
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions',function(){

    it('blocks takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeOff();}).toThrowError('No Take Off Due To Stormy Conditions');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('No Landing Due To Stormy Conditions');
      expect(airport.planes()).toEqual([]);
    });
  });
});