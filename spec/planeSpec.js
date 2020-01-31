'use sctrict;'

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new plane;
    airport = jasmine.createSpyObj('airport', ['allClear']);
  });

  it('can land at an Airport', function(){
    plane.land(airport);
    expect(airport.allClear).toHaveBeenCalledWith(plane);
  });


});