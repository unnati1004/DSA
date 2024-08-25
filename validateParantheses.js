var isValid = function(s) {
               let stack = [];
           
               for(let ch of s) {
                   if(ch === '(' || ch === '{' || ch === '[') {
                       stack.push(ch);
                   } else {
                       // Check if the stack is empty or the top of the stack doesn't match the current closing bracket
                       if(stack.length === 0 || 
                          (ch === ')' && stack[stack.length - 1] !== '(') ||
                          (ch === '}' && stack[stack.length - 1] !== '{') ||
                          (ch === ']' && stack[stack.length - 1] !== '[')) {
                           return false;
                       }
                       // If it matches, pop the top element from the stack
                       stack.pop();
                   }
               }
           
               // If the stack is empty at the end, all brackets were matched correctly
               return stack.length === 0;
           };