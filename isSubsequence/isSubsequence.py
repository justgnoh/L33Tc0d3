class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        pointerT = 0
        subsequence = 0
        
        if (len(s) > len(t)):
            return False
        
        for index, val in enumerate(s):
            if (pointerT >= len(t)):
                return False
            
            for j in range(pointerT,len(t)):
                if s[index]  == t[j]:
                    if subsequence > j:
                        return False
                    pointerT = j+1 # Progress T pointer
                    subsequence = j
                    break
                
                if j == len(t) -1:
                    return False
        
        return True
        