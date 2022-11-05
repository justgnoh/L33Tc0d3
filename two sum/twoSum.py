class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict = {}
        
        for i,v in enumerate(nums):
            balance = target - v
            if balance in dict:
                return [i, dict[balance]]
            else:
                dict[v] = i
            
#         Always 2 elems
#         Each number is between 10^9 and -10^9
#         Target is between 10^9 and -10^9