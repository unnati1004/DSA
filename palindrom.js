var isPalindrome = function (x) {

               let arr = x.toString();
               let digit = arr.split("");
               
               let j = digit.length - 1;
               for(let i = 0;i<digit.length;i++)
               {
                   if(arr[i]==arr[j]){
                       j--;
                   }
                   else if (arr[i] !== arr[j]){
                       return false;
                   }
               }
               return true;
           };