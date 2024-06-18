const rotate = (nums: number[], k: number)=> {
    // check out of range case
    k=k%nums.length
    const result = new Array(nums.length)
    for (let i=0;i<nums.length;i++){
        result[(i+k)%nums.length]=nums[i]
    }
    return result
}
const a: number[] = [1,2,3,4,5]
console.log(rotate(a,2));
