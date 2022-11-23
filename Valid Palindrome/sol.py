class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # Remove spaces
        # Remove non alphanumeric numbers
        
        if len(s) == 1 or len(s) < 1:
            return True
        
        startPointer = 0
        endPointer = len(s)-1
        
        while startPointer <= endPointer:
            # Travers until First Al Num
            while not s[startPointer].isalnum() and startPointer < endPointer:
                startPointer += 1
            while not s[endPointer].isalnum() and endPointer > startPointer:
                endPointer -= 1
            
            if lower(s[startPointer]) != lower(s[endPointer]):
                return False
            else:
                startPointer += 1
                endPointer -= 1
            
        return True