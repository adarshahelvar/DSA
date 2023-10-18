/*
Given an 2-D with unsorted elements. Merge all the elements into one sorted Array and return it.
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
*/

let lists = [[1,4,5],[1,3,4],[2,6]]
let empArr = []
for (let i = 0 ;i<lists.length; i++){
  for(let j=0;j<lists[i].length;j++){
    empArr.push(lists[i][j])
  }
}

console.log(empArr.sort())
