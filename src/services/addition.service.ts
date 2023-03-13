const generateAddend = () => {
    return Math.floor(Math.random() * 10);
}

const leftAddend = generateAddend();
const rightAddend = generateAddend();

const answer = leftAddend + rightAddend;

export { answer, leftAddend, rightAddend }