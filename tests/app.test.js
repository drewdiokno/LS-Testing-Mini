const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
    
  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of 4', () => {
      const applesLength = cases.apples.length; 
      expect(applesLength).to.equal(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain an element "Red Delicious"', () => {
      const apples = cases.apples;
      expect(apples).to.include("Red Delicious");
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('Favorite band should be Beastie Boys', () => {
      const hisFavBand = cases.Ben.favBand;
      assert.equal(hisFavBand, 'Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('favorite food should be pizza', () => {
      const seansFavFood = cases.Sean.favFood;
      assert.equal(seansFavFood, 'Pizza');
    })
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('Favorite book should NOT be Harry Potter', () => {
      const ryansFavBook = cases.Ryan.favBook;
      expect(ryansFavBook).to.not.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('fav color should NOT be Gold', () => {
      const austensFavColor = cases.Austen.favColor;
      expect(austensFavColor).to.not.equal('Gold');
    })
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('Favorite activity should be Rock Climbing', () => {
      const kartsFavActivity = cases.Karthik.favActivity;
      expect(kartsFavActivity).to.be.equal('Rock Climbing');
    })
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should return a sum', () => {
        const sum = cases.addNums(1, 1);
        expect(sum).to.equal(2);
      })
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      // pass our spy `callBack` to our newCbInvoker fn. 
      newCbInvoker(callBack);
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
        expect(callBack).to.have.been.calledOnce;
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const anotherIterator = cases.iterator;
      const callBack = sinon.spy();
      anotherIterator(2, callBack);
      expect(callBack).to.have.calledTwice; //can also use .callCount(x)
    });
  });

  
});
