const chai = require('chai');
const expect = chai.expect;

const Hydration = require("../src/hydration");
const hydrationData = require("../data/sampleHydration");

describe('Hydration', function() {

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })
    
  let hydro;
  beforeEach(function() {
    hydro = new Hydration(hydrationData);
  });

  it('should be an instance of Hydration', function() {
    expect(hydro).to.be.an.instanceof(Hydration);
  })

  it('should return the average ounces consumed by a user', function() {
    expect(hydro.averageTotalFluidOzPerUser(7)).to.equal(6.42);
  })

  it('should return the ozs of specified date by a user', function() {
    expect(hydro.fluidOzsPerDay(4, "2019/06/19")).to.equal(21);
  })

  it('should return the ozs of specified week by a user', function() {
    expect(hydro.userFluidsPerWeek(7, "2019/06/22")).to.deep.eql({'2019/06/16': 49, 
      '2019/06/17': 50,
      '2019/06/18': 58,
      '2019/06/19': 41,
      '2019/06/20': 80,
      '2019/06/21': 95,
      '2019/06/22': 74 });
  })

});