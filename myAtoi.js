// 8. String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
               let i = 0, base = 0, sign = 1;
             
                 // Ignore leading whitespaces
                 while (i < str.length && str[i] === ' ') {
                     i++;
                 }
             
                 // Check for optional sign
                 if (i < str.length && (str[i] === '-' || str[i] === '+')) {
                     sign = (str[i++] === '-') ? -1 : 1;
                 }
             
                 // Convert the characters to a number
                 while (i < str.length && str[i] >= '0' && str[i] <= '9') {
                     const digit = str[i++] - '0';
             
                     // Handle overflow
                     if (base > Math.floor((2147483647 - digit) / 10)) {
                         return sign === 1 ? 2147483647 : -2147483648;
                     }
             
                     base = base * 10 + digit;
                 }
             
                 return base * sign;
             };