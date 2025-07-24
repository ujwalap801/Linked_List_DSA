
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // put all nodes of headB inside a set
    let setNode = new Set();
    let curr = headB;
    let currHeadA = headA;
    while(curr)
    {

        setNode.add(curr);
        curr = curr.next;
    }

// check for each element of HeadA if they are present in set
    while(currHeadA)
    {
        if(setNode.has(currHeadA))
        {
            return currHeadA;
        }
        currHeadA = currHeadA.next;
    }

return null;

    
};