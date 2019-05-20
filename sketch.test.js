const sum = require('./sketch.js');


test('Test1', ()=>{
    var x = sum(3,3);
    expect(x).toBe(6);
})