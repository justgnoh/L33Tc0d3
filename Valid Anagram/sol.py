class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dictS, dictT = {}, {}
        
        # If not exist, add with count 1
        # If exist, count+=1
        
        for index,val in enumerate(s):
            if (val not in dictS):
                dictS[val] = 1
            else:
                dictS[val] += 1
        
        for index,val in enumerate(t):
            if (val not in dictT):
                dictT[val] = 1
            else:
                dictT[val] += 1
                
        return dictS == dictT
            
        