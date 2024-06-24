const insertSort = (nums: number[]): number[] => {
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = temp;
    }
    return nums;
}

const a: number[] = [4, 2, 1, 3, 5];
console.log(insertSort(a));