const expect = require('chai').expect;

describe('test', () => {
  it('just for test', () => {
    expect(1+1).to.equal(2);
  });

  it('minus test', () => {
    expect(1-1).to.equal(0);
  });

  it('multiply test', () => {
    expect(2*3).to.equal(6);
  });
});
