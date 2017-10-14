function moveUp(_a){
  var _row = _a.parentNode.parentNode;
  //如果不是第一行，則與上一行交換順序
  var _node = _row.previousSibling;
  while(_node && _node.nodeType != 1){
    _node = _node.previousSibling;
  }
  if(_node){
    swapNode(_row,_node);
  }
}
