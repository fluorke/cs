#structure of binary tree
TreeNode = Struct.new(:info, :left, :right) do

  #recursively create tree nodes
  public def create
    data = nil
    tree = TreeNode.new(nil, nil, nil)

    data = gets.chomp.to_i

    if data == -1
      return nil
    end

    tree.info = data
		tree.left = create

    return tree
  end

  #inorder travesal of given tree
  public def inorder(root)
    if root == nil 
      return
    end
  
    inorder(root.left)
    puts "node info is: #{root.info}"
    end
end

root = TreeNode.new(nil, nil, nil).create

#puts root
root.inorder(root)
