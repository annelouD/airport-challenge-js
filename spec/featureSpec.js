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

  it('Plane can take off from Airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});