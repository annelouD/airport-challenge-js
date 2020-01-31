'use sctrict;'

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['clearLanding']);
  });

  it('Can land at an Airport', function(){
    plane.land(airport);
    expect(airport.clearLanding).toHaveBeenCalledWith(plane);
  });


});