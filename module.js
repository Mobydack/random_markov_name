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

    stringify() {
        return {
            chars: this.chars,
            tokens: this.tokens,
            types: this.types,
        };
    }

    static parse(value) {
        const dic = new Dictonary(value);
    }
}

module.exports =  Dictonary;
