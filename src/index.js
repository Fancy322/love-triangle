/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var p1, p2, c = 0;
  
  for(var i = 0; i < preferences.length; i++)
  {
    p1 = preferences[i];
    p2 = preferences[p1 - 1];
       if(preferences[p2 - 1] == i + 1) 
        c++;
   }
  return Math.floor(c / 3);
  // your implementation
};
