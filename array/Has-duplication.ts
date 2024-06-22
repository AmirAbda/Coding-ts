const has_duplication = (nums: number[]) => {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] == nums[i]) {
            return true;
        }
    }
    return false;
}
const a1: number[] = [1, 1, 1, 2, 3];

console.log(has_duplication(a1));