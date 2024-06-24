const isPalindrom=(s: string):boolean=>{

    const stack: string[] = [];
    for (let char of s){
        stack.push(char);
    }
    for( let char of s){
        if (char !== stack.pop()){
            return false;
    }

    }
    return true;

}
const st: string = "racecar";

console.log(isPalindrom(st))