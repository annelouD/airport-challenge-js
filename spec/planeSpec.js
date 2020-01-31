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

});