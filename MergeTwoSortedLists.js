// Merge Two Sorted Lists

function ListNode(val, next) {
               this.val = (val === undefined ? 0 : val);
               this.next = (next === undefined ? null : next);
           }
           
           var mergeTwoLists = function(list1, list2) {
               // Create a dummy node to act as the starting point of the merged list
               let dummy = new ListNode(-1);
               let current = dummy;
           
               // While both lists are non-empty, merge the lists by comparing their current nodes
               while (list1 !== null && list2 !== null) {
                   if (list1.val <= list2.val) {
                       current.next = list1;  // Link the smaller node to the current node
                       list1 = list1.next;    // Move to the next node in list1
                   } else {
                       current.next = list2;  // Link the smaller node to the current node
                       list2 = list2.next;    // Move to the next node in list2
                   }
                   current = current.next;    // Move to the next node in the merged list
               }
           
               // At this point, at least one of the lists is null. Link the remaining nodes.
               current.next = (list1 !== null) ? list1 : list2;
           
               // Return the merged list, which starts from dummy.next
               return dummy.next;
           };
           
           // Helper function to create a linked list from an array
           function arrayToList(arr) {
               let dummy = new ListNode();
               let current = dummy;
               for (let val of arr) {
                   current.next = new ListNode(val);
                   current = current.next;
               }
               return dummy.next;
           }
           
           // Helper function to print the linked list
           function printList(node) {
               let result = [];
               while (node !== null) {
                   result.push(node.val);
                   node = node.next;
               }
               console.log(result);
           }
           
           // Test Case
           let list1 = arrayToList([1, 2, 4]);
           let list2 = arrayToList([1, 3, 4]);
           
           let mergedList = mergeTwoLists(list1, list2);
           printList(mergedList);  // Expected Output: [1, 1, 2, 3, 4, 4]