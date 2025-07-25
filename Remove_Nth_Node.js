/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentNode = new ListNode();
    sentNode.next = head;
    let length =0;
    while(head)
    {
        head = head.next;
        length++;
    }

    let prevPos = length -n;
    let prev = sentNode;
    for(let i=0;i<prevPos;i++)
    {
        prev = prev.next
    }

    prev.next = prev.next.next;

    return sentNode.next;
    
};


// 2ND APPROACH
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // add sentinel node at start
    let sentNode = new ListNode();
    sentNode.next = head;
   
// move by first pointer ahead by n
  let first = sentNode;
 for(let i=0;i<n;i++)
 {
    first = first.next;
 }

// move both pointer unitl the first pointer reaches the last node
let second = sentNode;
while(first.next)
{
    second = second.next;
    first = first.next;
    
}

// just delete the second.next
second.next = second.next.next;

return sentNode.next;
 
};
