const reverse = (nums: number[]): number[] => {
    // initialize two pointers
    let left = 0;
    let right = nums.length - 1;

    // swap the values
    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    return nums;
};

const a: number[] = [1, 2, 3, 4, 5];
console.log(reverse(a)); 