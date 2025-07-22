

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
// ----------------MAP--------------------
let map = new Map();

// Add values
map.set('apple', 10);
map.set('banana', 20);
map.set('orange', 30);

console.log(map); // Map(3) { 'apple' => 10, 'banana' => 20, 'orange' => 30 }

// Get values
console.log(map.get('banana')); // 20

// Check if a key exists
console.log(map.has('orange')); // true
console.log(map.has('grape'));  // false

// Delete a key
let deleted = map.delete('banana');
console.log(deleted);           // true
console.log(map.has('banana')); // false

// Try deleting a non-existent key
console.log(map.delete('grape')); // false

console.log(map); // Map(2) { 'apple' => 10, 'orange' => 30 }



// ----------------SET-----------
let mySet = new Set();

// add()
mySet.add('apple');
mySet.add('banana');
mySet.add('apple');  // duplicate, won't be added

console.log(mySet);  // Set(2) { 'apple', 'banana' }

// has()
console.log(mySet.has('apple'));  // true
console.log(mySet.has('grape'));  // false

// delete()
mySet.delete('banana');
console.log(mySet);  // Set(1) { 'apple' }

// delete non-existing
console.log(mySet.delete('grape')); // false

// size
console.log(mySet.size);  // 1

// clear()
mySet.clear();
console.log(mySet);       // Set(0) {}

