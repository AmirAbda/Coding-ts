class Stack<T> {
    private stack: T[]= [];

    push(data:T): void {
        this.stack.push(data);
    }

    pop(): T | undefined {
        if(this.isEmpty()){
            return undefined;
        }
        return this.stack.pop();
    }
    isEmpty(): boolean {
        return this.stack.length === 0
    }
}