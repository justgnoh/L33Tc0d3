class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        
        dict = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        
        if len(s) % 2 != 0:
            return False
        
        for char in s:
            if char in dict:
                stack.append(char)
            else:
                if len(stack) != 0 and dict[stack.pop()] == char:
                    continue
                else:
                    return False
    
        return stack == []
    