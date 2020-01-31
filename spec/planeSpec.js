'use sctrict;'

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['clearLanding', 'clearTakeOff']);
  });

  it('Can land at Airport', function(){
    plane.land(airport);
    expect(airport.clearLanding).toHaveBeenCalledWith(plane);
  });

  it('Can take off from Airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearTakeOff).toHaveBeenCalled();
  });

  it('Does not allow take off when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('No Take Off Due To Stormy Conditions');
    expect(airport.planes()).toContain(plane);
  });
});