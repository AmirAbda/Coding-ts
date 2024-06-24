const reverseString = (s: string): string => {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    let result: string = "";
    for (let i = 0; i < s.length; i++) {
        result += stack.pop();
    }
    return result;
}

const ex: string = "hello";
console.log(reverseString(ex)); 
