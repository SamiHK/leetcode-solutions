/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  
    
    if(points.length <= 0) return [];
    if(k === 0) return [];
    if(k > points.length) return [];
    if(k === points.length) return points;
    
    for(let i = 0; i < points.length; i++){
        let point = points[i];
        points[i].push(Math.sqrt((point[0]*point[0] + point[1]*point[1])));
    }
    
    points.sort(([d1, v1, r1], [d2, v2, r2]) => r1 - r2);
    return points.slice(0, k).map(([x, y, z]) => [x, y]);
};
