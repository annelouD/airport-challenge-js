'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('Plane can land at Airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane)
  });

});