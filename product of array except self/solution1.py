import math

class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # O(n) time complexity
        # O(n) space complexity
        
        res = []
        prefix = []
        postfix = []
        
        tempPre = 1
        tempPost = 1
        
        # Populate Prefix Array
        for index,val in enumerate(nums):
            newVal = tempPre * val
            prefix.append(newVal)
            tempPre = newVal
        
        # Populate Postfix Array
        for index,val in reversed(list(enumerate(nums))):
            newVal = tempPost * val
            postfix.insert(0,newVal)
            tempPost = newVal
            
        for i in range(len(nums)):
            if (i+1 >= len(nums)):
                res.append(prefix[i-1])
            elif (i-1 < 0):
                res.append(postfix[i+1])
            else:
                res.append(prefix[i-1] * postfix[i+1])

        return res
            
                
            
        
        