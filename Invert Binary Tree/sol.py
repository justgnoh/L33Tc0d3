# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        
        # Base Case
        if (root is None):
            return
        else:
            # Recrusive calls
            root.left = self.invertTree(root.left)
            root.right = self.invertTree(root.right)

            # Action
            temp = root.left
            root.left = root.right
            root.right = temp
            return root