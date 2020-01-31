'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  
  it('can clear planes for landing', function(){
    airport.clearLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});