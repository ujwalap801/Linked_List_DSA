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
var evenOddList = function(head) {
    if (!head || !head.next) return head;

        let odd = head;
    let even = head.next;

    let evenStart = even;

      while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = null;           // End odd list
    even = evenStart;

    // Now reconnect: even → odd list
    // let lastEven = even;
    // while (lastEven.next) {
    //     lastEven = lastEven.next;
    // }
    // lastEven.next = head;
    // if u want only even index then comment the code

    return even;
};


// Test the function
const inputArray = [1, 2, 3, 4, 5];
const head = createLinkedList(inputArray); // Make sure this function is defined above
const rearrangedHead = evenOddList(head);
console.log(linkedListToArray(rearrangedHead)); // Should print: [1, 3, 5, 2, 4]
