// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
               if (numRows === 1 || numRows >= s.length) {
                  return s;
              }
          
              // Create an array of strings for each row
              let rows = new Array(numRows).fill('');
              let currentRow = 0;
              let goingDown = false;
          
              // Iterate through each character in the string
              for (let char of s) {
                  rows[currentRow] += char;
                  if (currentRow === 0 || currentRow === numRows - 1) {
                      goingDown = !goingDown;
                  }
                  currentRow += goingDown ? 1 : -1;
              }
          
              // Combine all rows into one string
              return rows.join('');
          };