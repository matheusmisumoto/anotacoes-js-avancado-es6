const assert = require('assert');
const Math = require('../src/math.js');

// Chai - https://www.chaijs.com/api/bdd/
const expect = require('chai').expect;

// Sinon
const sinon = require('sinon');

let value = 0;

describe('Math class', function(){
    // hooks: formas de executar códigos evitando repetição
    // before, beforeEach, after, afterEach
    beforeEach(function(){
        value = 0;
    });

    // Done: garante que o teste aguarde a Promise/Async/Await para retornar possíveis erros
    it('Sum two numbers', function(done){
        const math = new Math();

        value = 5;

        // Valor customizado de timeout
        this.timeout(3000);

        try {
            math.sum(value, 5, (value) => {
                // assert.equal(value, 10);

                // Chai
                expect(value).to.equal(10);

                done();
            });
        } catch(err) {
            console.log(err);
        }
    });

    // it.only = executa somente aquele teste
    // it.skip = pula o teste

    it('Multiply two numbers', function(){
        const math = new Math();

        // assert.equal(math.multiply(value, 5), 0);
        expect(math.multiply(value, 5)).to.equal(0);
    });

    it('Validate object', function(){
        const obj = {
            name: 'Matheus Misumoto'
        };

        const obj2 = {
            name: 'Matheus Misumoto'
        };

        expect(obj).to.have.property('name');
        expect(obj).to.have.property('name').equal('Matheus Misumoto');
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            // com "espiões" é possível verificar se a função foi invocada da maneira correta
            load: sinon.spy()

            // load: function load(){
            //     console.log('Called');
            // }
        };
       
        // sinon.spy(res, 'load');

        // Substituir o método e retorna por outro valor em load
        // sinon.stub(res, 'load').returns('xpto');

        const math = new Math();
        math.printSum(req, res, 5, 5);
        
        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });
});