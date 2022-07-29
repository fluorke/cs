const binary_tree = {
  i: 0,
  left: null,
  right: null,

  logTree() {
    let current = this.i;
    console.log(current);

    this.left !== null ? this.left.logTree() : null
    this.right !== null ? this.right.logTree() : null;
  }
}

binary_tree.left = {i: 1, left: null, right: null, 
logTree() {
    let current = this.i;
    console.log(current);

    this.left !== null ? this.left.logTree() 
      : this.right !== null ? this.right.logTree() : null
  }
};

binary_tree.right = {i: 2, left: null, right: null, 
logTree() {
    let current = this.i;
    console.log(current);

    this.left !== null ? this.left.logTree() 
      : this.right !== null ? this.right.logTree() : null
  }
};

binary_tree.left.right = {i: 3, left: null, right: null, 
logTree() {
    let current = this.i;
    console.log(current);

    this.left !== null ? this.left.logTree() 
      : this.right !== null ? this.right.logTree() : null
  }
};


binary_tree.logTree();