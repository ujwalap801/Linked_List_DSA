/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast !=null && fast.next !=null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow; //In node{listnode means slow of it has Number then slow.val}
};

// USING ARRAY

let arr =[1,2,3,4,5,6]

function MiddleArr(arr,n)
{

    let newArr =[];
    let length = Math.floor(n/2);
    for(let i=length;i<n;i++)
    {
             newArr.push(arr[i])
    }

    return newArr;
}

console.log(MiddleArr(arr,arr.length));

// USING SLICE
function getMiddleSubarray(arr) {
    const mid = Math.floor(arr.length / 2);
    return arr.slice(mid);
}

console.log(getMiddleSubarray([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(getMiddleSubarray([1, 2, 3, 4, 5, 6])); // [4, 5, 6]