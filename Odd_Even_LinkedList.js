// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array (for output)
function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

//  Your core function

var oddEvenList = function(head) {

    if(!head || !head.next) return head;

    let odd = head;
    let even= head.next;
    let evenStart = even;
    while(odd.next && even.next)
    {
        odd.next= odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

 odd.next = evenStart; // IF U WANT ONLY ODD NODES
    return head;
};

// Test the function
const inputArray = [1, 2, 3, 4, 5];
const head = createLinkedList(inputArray); // Make sure this function is defined above
const rearrangedHead = oddEvenList(head);
console.log(linkedListToArray(rearrangedHead)); // Should print: [1, 3, 5, 2, 4]
