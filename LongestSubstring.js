// Longest substring without repeating character

var lengthOfLongestSubstring = function(str) {
               let n = str.length;
              let map = new Map(); // HashMap to store the last index of characters
              let res = 0;
              let i = 0; // Start index of the current window
          
              for (let j = 0; j < n; j++) {
                  let char = str[j];
                    // console.log(char);
                    
                  // If char is already in map, move the start index to right of its last occurrence
                  if (map.has(char)) {
                      i = Math.max(i, map.get(char) + 1);
                  }
          
                  // Update the result if we get a larger window
                  res = Math.max(res, j - i + 1);
          
                  // Update or insert the last index of char
                  map.set(char, j);
              }
          
              return res;
          };

// Test Case
s= "abcabcbb";
let stringlength = lengthOfLongestSubstring(s);
console.log(stringlength);
