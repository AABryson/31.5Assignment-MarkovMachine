/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov.js");
const fs = require('fs');
const axios = require('axios');

let machine = new MarkovMachine('Would you like them In a house? Would you like them With a mouse?')
console.log(machine)

let text = machine.makeText()
console.log(text)

function read_file(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log('Cannot read file', err);
            process.exit(1);

        } else {
            let machine = new MarkovMachine(data)
            console.log(machine.makeText())
        }
    })
    
}

async function read_url(url) {
    try {
    let response = await axios.get(url);
    } catch(err) {
        console.log('Could not access url', err);
        process.exit(1)
    }
    let machine = new MarkovMachine(reseponse)
    let result = machine.makeText();
    console.log(result)
}

    
