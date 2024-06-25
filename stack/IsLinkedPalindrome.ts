class ListNode {
    val:number;
    next: ListNode | null ;
    constructor(val: number=0 , next: ListNode | null = null ){
        this.val = val ;
        this.next = next;
    }
}

class Solution {
    isPalindrome(head: ListNode | null): boolean {
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        const stack: number[]= [];

        while (fast && fast.next){
            stack.push(slow!.val);
            slow = slow!.next;
            fast = fast.next.next;
        }
        if (fast){
            slow = slow!.next;
        }
        while (slow){
            if(slow.val !== stack.pop()){
                return false;
            }
            slow = slow.next;
        }
        return true;
    }
  
}