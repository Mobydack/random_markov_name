const fs = require('fs');
const prettier = require('prettier');
const Dictonary = require("./module");

const makeModel = words => {
    const model = {};

    words.forEach(value => {
        const word = '*' + value.toLowerCase().trim();

        for(let i = 0; i < word.length - 1; i++) {
            const ch = word[i];

            if (! model[ch]) {
                model[ch] = new Dictonary();
            }

            model[ch].update(...(word[i + 1]));
        }
    });

    return model
};

const writeModel = data => {
    const model = makeModel(data);
    let text = `
        class Dictonary {
            chars = {};
            types = 0;
            tokens = 0;

            constructor(init) {
                if (init) {
                    this.chars = init.chars;
                    this.types = init.types;
                    this.tokens = init.tokens;
                }
            }

            update(...chars) {
                chars.forEach(char => {
                    let count = this.chars[char];

                    if (! count) {
                        count = 0;

                        this.types += 1;
                    }

                    this.chars[char] = count + 1;
                    this.tokens += 1;
                });
            }

            randomChar(excludeKeys = []) {
                const randomInt = parseInt(Math.random() * this.tokens);
                const keys = Object.keys(this.chars).filter(key => ! excludeKeys.includes(key));

                let index = 0;

                for (let i = 0; i <= this.types; i++) {
                    index += this.chars[keys[i]];

                    if (index >= randomInt) {
                        return keys[i];
                    }
                }
            }
        }

        const model = new Map();
    `;

    Object.keys(model).forEach(key => {
        const data = model[key].stringify();

        text += `
        model.set("${key}", new Dictonary(${JSON.stringify(data)}));
        `;
    });

    text += `
        module.exports = model;
    `;
    fs.writeFileSync('model.js', prettier.format(text));
};

module.exports = writeModel;
