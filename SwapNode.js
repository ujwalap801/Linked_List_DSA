/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummyNode = new ListNode();
    dummyNode.next = head;

let prev= dummyNode;
let curr = head;
let n = head.next;

while(curr && n)
{
    prev.next =n;
    curr.next =n.next;
    n.next = curr;

    prev= curr;
    curr = prev.next;
    n = curr && curr.next;
}

return dummyNode.next;

    
};


// RECURSIVE
var swapPairs = function(head) {
    
    if(!head || !head.next) return head;
    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next =l;
    return r;
};