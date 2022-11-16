class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # Dicts
        # Two Pointer method
        # Sliding Window (Fixed width)
        
        # Skip method doesn't work, needs 2 for-loops
        
        endIndex = len(nums)-1
        currIndex = 0
        res = []
        temp = 1
        
        while True:
            for index,val in enumerate(nums):
                if index == currIndex:
                    continue
                temp = temp * val
            
            res.append(temp)
            temp = 1
            currIndex += 1
            
            if currIndex > endIndex:
                return res