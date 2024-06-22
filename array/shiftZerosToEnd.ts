const shiftZerosToEnd = (nums: number[]): number[]=> {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if(nums[left]==0){
            [nums[left],nums[right]]=[nums[right],nums[left]]
            right--;
        }else {
            left++;
        }
    }
    return nums;
}
const l = [1, 2, 0, 4, -1, 5, 6, 0, 0, 7, 0];
console.log(l)
