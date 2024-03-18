const { MarkovMachine } = require("./markov.js");

describe('general tests', function() {
    test('this.make chains', function() {
        let machine = new MarkovMachine('a, b, a ,c');
        expect(machine.chainMap).toEqual(new Map([
            ['a', ['b, c']],
            ['b', ['a']],
            ['c', [null]]]));
        }
    )}
)