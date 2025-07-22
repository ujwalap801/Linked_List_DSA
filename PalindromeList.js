function isPalindromeArray(n) {
    let left = 0;
    let right = n.length - 1;

    while (left < right) {
        if (n[left] !== n[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // All elements matched
}

// USING FOR LOOOP
function isPalindromeArrayloop(n) {
    for (let i = 0; i < Math.floor(n.length / 2); i++) {
        if (n[i] !== n[n.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // All elements matched
}

let arr1 = [1, 2, 3, 1, 1];
console.log(isPalindromeArrayloop(arr)); // Output: false


let arr =[1,2,3,1,1];
console.log(isPalindromeArray(arr));




function linkedListToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val); // Add current node's value to array
        current = current.next;   // Move to next node
    }

    return result;
} 