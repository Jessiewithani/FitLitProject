const chai = require('chai');
const expect = chai.expect;

const User = require("../src/singleUser");
const userData = require("../data/sampleUsers");
const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)
const randomUser = userData.find(user => user.id === randomIndex)

describe('User', function() {

  it('should be a function', function() {
    expect(User).to.be.a('function');
  })

  let user;
  beforeEach(function() {
    user = new User(randomUser);
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  })

  it('should hold properties from sample data file', function() {
    expect(user.randomUser.name).to.equal(randomUser.name);
  })

  it('should return the first name of the user', function() {
    expect(user.returnFirstName()).to.equal(randomUser.name.split(" ")[0]);
  })

});