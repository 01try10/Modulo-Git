//CommonJS
const {countInstancesOf} = require('./contador');

//sirve para grupar pruebas
describe('Contar (()', ()=>{
    test ('1', ()=>{
        expect(countInstancesOf('(',')','()))(())')).toBe(2);
    });

    test ('2', ()=>{
        expect(countInstancesOf('(',')',')))())')).toBe(4);
    });

    test('3', ()=>{
        expect(countInstancesOf('(',')',')))(((())')).toBe(1);
    });

//Esperaria que la suma de cero y cero de como resultado cero
});

describe('Testing subs function', ()=>{

});