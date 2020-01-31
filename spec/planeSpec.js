'use sctrict;'

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['allClear']);
  });

  it('Can land at an Airport', function(){
    plane.land(airport);
    expect(airport.allClear).toHaveBeenCalledWith(plane);
  });


});