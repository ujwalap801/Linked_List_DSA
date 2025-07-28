/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // CORNER CASE
    if(!head || !head.next) return head;

    // TO FIND LENGTH
    let length =0;
    let curr = head;
   while(curr)
   {
    curr = curr.next;
    length++;
   }
//    TO AVOID UNCESSARY ROTATIONS
k =k % length;

let s = head;
let f = head;
for(let i=0;i<k;i++)
{
    
    f=f.next;
}
    

    while(f.next)
    {
        s = s.next;
        f=f.next;
    }


    f.next = head;
    let newNode = s.next;
    s.next = null;

    return newNode;
};