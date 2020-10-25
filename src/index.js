module.exports = function check (str, bracketsConfig) {
    const stack = [];
    const brackets = Object.fromEntries(bracketsConfig);

    for (const el of str.split``) {
        if (stack[0] === el) {
            stack.shift();
        } else if (brackets[el]) {
            stack.unshift(brackets[el]);
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
