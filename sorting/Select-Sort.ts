const selectionSort = (nums: number[]): void => {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min !== i) {
            // Swap elements
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
}

const b: number[] = [4, 2, 1, 3, 5];
selectionSort(b);
console.log(b); 