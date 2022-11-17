import math

class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # O(n) time complexity
        # O(1) space complexity
        res = []
        prefix = 1
        postfix = 1
        
        for index,val in enumerate(nums):
            if index == 0:
                # No Prefix
                res.append(prefix)
            else:
                prefix = prefix * nums[index-1]
                res.append(prefix)
        
        for index,val in reversed(list(enumerate(nums))):
            if (index == (len(nums)-1)):
                res[index] = res[index]*postfix
            else:
                postfix = postfix * nums[index+1]
                res[index] = res[index]*postfix
        
        return res