
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let res = [];
    let curr = head;
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    let left = 0;
    let right = res.length - 1;
    while (left < right) {
        if (res[left] !== res[right]) {
            return false;
        }

        left++;
        right--;
    }
    return true;


};


// Apprach-2

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    //   FINDING MIDDLE ELEMENT
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // REVERSE FROM MIDDLE ELEMENT
    let prev = null;
    let curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // CHECK PALINDROME
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }

        firstList = firstList.next;
        secondList = secondList.next;
    }

    return true;
};