class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        maxProfit = 0

        # Left(Buy)
        left = 0
        # Right(Sell)
        right = 1
        
        while (right < len(prices)):
            profit = prices[right] - prices[left]
            
            # Progress pointer to right if there is a cheaper "buy" in the future
            if (prices[left] > prices[right]):
                left = right
            else:
                maxProfit = max(maxProfit, profit)
            right += 1 
            
        
        return maxProfit