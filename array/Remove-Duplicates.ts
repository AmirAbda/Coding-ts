const removeDuplicates = (nums: number[]): number => {
    let p1 = 0;
    for (let p2 = 1; p2 < nums.length; p2++) {
        if (nums[p1] !== nums[p2]) {
            p1 += 1;
            nums[p1] = nums[p2];
        }
    }
    return p1 + 1;
}

const nums: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums)); 
console.log(nums); 