const isBalanced = (expression: string): boolean => {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = { ')': '(', '}': '{', ']': '[' };

    for (let char of expression) {
        if (Object.values(pairs).includes(char)) {
            stack.push(char);
        } else if (Object.keys(pairs).includes(char)) {
            if (!stack.length || pairs[char] !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

const s: string = "({[]})";
console.log(isBalanced(s))