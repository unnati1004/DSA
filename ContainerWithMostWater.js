
// Container with most water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
               let l =0;
               let r = height.length - 1;
               let area = 0;
           
               while(l<r){
                   area = Math.max(area,Math.min(height[l],height[r])*(r-l));
                   if(height[l] < height[r]){
                       l += 1;
                   }else{
                       r -=1;
                   }        
               }
                   return area;
           };