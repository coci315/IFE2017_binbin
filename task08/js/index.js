var root = document.querySelector('.parent');

// 广度优先
var traverseNode01 = function (node, callback) {
  var flag;
  if (node) {
    flag = callback(node);
    if (flag === true) return true;
    var queue = [];
    if (node.children.length > 0) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        queue.push(node.children[i]);
      }
    }
    var item;
    while (queue.length) {
      item = queue.shift();
      flag = callback(item);
      if (flag === true) return true;
      if (item.children.length > 0) {
        for (var i = 0, l = item.children.length; i < l; i++) {
          queue.push(item.children[i]);
        }
      }
    }
    return false;
  }
};

// 非递归深度优先
var traverseNode02 = function (node, callback) {
  if (node) {
    callback(node);
    var queue = [];
    if (node.children.length > 0) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        queue.push(node.children[i]);
      }
    }
    var item;
    while (queue.length) {
      item = queue.shift();
      callback(item);
      if (item.children.length > 0) {
        for (var i = item.children.length - 1; i >= 0; i--) {
          queue.unshift(item.children[i]);
        }
      }
    }
  }
};

// 先序遍历
var preOrderTraverseNode = function (node, callback) {
  if (node) {
    callback(node);
    if (node.children.length > 0) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        preOrderTraverseNode(node.children[i], callback);
      }
    }
  }
};

// 后序遍历
var postOrderTraverseNode = function (node, callback) {
  if (node) {
    if (node.children.length > 0) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        postOrderTraverseNode(node.children[i], callback);
      }
    }
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
  traverseNode01(root, showColor);
});

btns[1].addEventListener('click', function () {
  i = 0;
  preOrderTraverseNode(root, showColor);
});

btns[2].addEventListener('click', function () {
  i = 0;
  postOrderTraverseNode(root, showColor);
});

var searchInput = document.querySelector('.search>input');
var searchBtn = document.querySelector('.search>button');

var nodeCount = 0;
traverseNode01(root, function () {
  nodeCount++;
});

var count = 0;

function searchNode(node) {
  setTimeout(function () {
    node.style.backgroundColor = '#398dee';
  }, 500 * i++);
  setTimeout(function () {
    node.style.backgroundColor = '#fff';
    count++;
    if (count === nodeCount && node.childNodes[0].nodeValue.trim() !== searchInput.value.trim()) {
      alert('未找到您要查找的节点');
    }
  }, 500 * i)
  if (node.childNodes[0].nodeValue.trim() == searchInput.value.trim()) {
    setTimeout(function () {
      node.style.backgroundColor = '#f00';
    }, 500 * i);
    return true;
  } else {
    return false;
  }
}

searchBtn.addEventListener('click', function () {
  i = 0;
  count = 0;
  traverseNode01(root, function (node) {
    node.style.backgroundColor = '#fff';
  })
  traverseNode01(root, searchNode);
})