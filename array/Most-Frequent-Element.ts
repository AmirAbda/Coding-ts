const frequent_element = (nums: number[]): number => {
    let map = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { 
            map.set(nums[i], map.get(nums[i])! + 1); 
        } else {
            map.set(nums[i], 1); 
        }
    }

    let max_freq = 0;
    let most_frequent_element = -1; 

    for (const [key, value] of map.entries()) { 
        if (value > max_freq) {
            max_freq = value;
            most_frequent_element = key;
        }
    }

    return most_frequent_element;
};

const a: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(frequent_element(a));