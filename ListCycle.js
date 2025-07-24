

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let setSeen = new Set();
  let curr = head;
  while(curr)
  {
    if(setSeen.has(curr))
    {
        return true;
    }


    setSeen.add(curr);
    curr = curr.next;

  }

  return false;
};



// APPROACH -2

var hasCycle = function(head) {
if(!head) return false;
let slow = head;
let fast = head.next;
while(slow!=fast)
{
    if(fast === null || fast.next === null)
    {
        return false;
    }


    slow = slow.next;
    fast = fast.next.next;
}

return true;
};
