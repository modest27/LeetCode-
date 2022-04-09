class LinkNode{
  constructor(val,next){
      this.val=val;
      this.next= next;
  }
}

var MyLinkedList = function() {
  this.size=0;
  this._head=null;
  this._tail=null;
};

MyLinkedList.prototype.getNode= function(index){
  if(index<0||index>=this.size) return null;
  let cur = new LinkNode(0,this._head);
  while(index-->=0){
      cur=cur.next;
  }
  return cur;
}
/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if(index<0||index>=this.size) return -1;
  return this.getNode(index).val
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkNode(val,this._head);
  this._head=node;
  this.size++;
  if(!this._tail){
      this._tail=node;
  }
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val,null);
  this.size++;
  if(this._tail){
      this._tail.next=node;
      this._tail=node;
      return;
  }
  this._tail=node;
  this._head=node;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size) return;
  if(index <= 0) {
      this.addAtHead(val);
      return;
  }
  if(index === this.size) {
      this.addAtTail(val);
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this.size++;
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index<0||index>=this.size) return;
  if(index===0){
      this._head=this._head.next;
      this.size--;
      if(index===this.size-1){
          this._tail=this._head
      }
      return;
  }
  const node = this.getNode(index-1);
  node.next = node.next.next;
  if(index===this.size-1){
      this._tail=node;
  }
 
  this.size--;
};