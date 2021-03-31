const generateRandomStart = (model) => {
    return model.get('*').randomChar();
};

const generateRandomName = (length, model) => {
    let countCopyChar = 0;
    let current = generateRandomStart(model);
    let name = current;

    for(let i = 0; i < length - 1; i++) {
        const symbolModel = model.get(current);
        let randomChar = symbolModel.randomChar();

        if (randomChar === current) {
            countCopyChar += 1;
        }

        if (
            (i === 0 && countCopyChar === 1) ||
            countCopyChar === 3
        ) {
            randomChar = symbolModel.randomChar([randomChar]);
        }

        current = randomChar;
        name += current;
    }

    return name;
};

module.exports =  generateRandomName;