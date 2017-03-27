var root = document.querySelector('.parent');

// 中序遍历
var inOrderTraverseNode = function (node, callback) {
  if (node !== undefined) {
    inOrderTraverseNode(node.children[0], callback);
    callback(node);
    inOrderTraverseNode(node.children[1], callback);
  }
};

// 先序遍历
var preOrderTraverseNode = function (node, callback) {
  if (node !== undefined) {
    callback(node);
    preOrderTraverseNode(node.children[0], callback);
    preOrderTraverseNode(node.children[1], callback);
  }
};

// 后序遍历
var postOrderTraverseNode = function (node, callback) {
  if (node !== undefined) {
    postOrderTraverseNode(node.children[0], callback);
    postOrderTraverseNode(node.children[1], callback);
    callback(node);
  }
};

var i = 0;

function showColor(node) {
  setTimeout(function () {
    node.style.backgroundColor = '#398dee';
  }, 500 * i++);
  setTimeout(function () {
    node.style.backgroundColor = '#fff';
  }, 500 * i)
}

var btns = document.querySelectorAll('.btns>button');

btns[0].addEventListener('click', function () {
  i = 0;
  inOrderTraverseNode(root, showColor);
});

btns[1].addEventListener('click', function () {
  i = 0;
  preOrderTraverseNode(root, showColor);
});

btns[2].addEventListener('click', function () {
  i = 0;
  postOrderTraverseNode(root, showColor);
});