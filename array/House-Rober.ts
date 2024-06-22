const house_rober=(nums:number[])=>{
    // edge cases
    if(nums.length === 0) return 0;
    if(nums.length ===1) return nums[0];

    const n = nums.length;
    const dp: number[] = new Array(n);
    // Base cases
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);

    for (let i =2 ; i< n; i++){
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[n-1];
}
const a1:number[]=[1,2,3,1];
console.log(house_rober(a1));