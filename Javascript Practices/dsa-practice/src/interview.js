// // arrStr = ["abc", "cba", "a", "ab" , "ba" "ac" , "ca", "bac"]
// // Group the common strings which are generated by rotating string

// //  [ ["abc"] , ["cba", "bac"] , ["a"] , ["ab", "ba"], ["ac", "ca"] ]
// //
// /*
//   // old -> searching into arrStr -> length of arrStr -> n => Big (n)
//   // new -> { abc : 0 } -> searching in object  Bing O(1) -> contant
//   abc - 3
//   productRotation = [bca, cab] Big O(n) -> n length string
//   searcing using object -> Big O(1)
//   total comlexity will be Bing n^2

// */

// const arrStr = ["ab", "ba", "12", "21", "34"];
// // ab -> [ba]

// // "ba", "123", "321", "231", "a"];
// // ["ab", "ba"]
// //

// "ab"  -> "ab" , "ba"

// {
//   "ab" : {"ab", "ba"}
// }

// {
//   "ab" : 0,
//   "ba" : 0,

// }

const arrStr = ["ab", "ba", "abc", "bca", "cab", "12", "34"];
function FindGroup(arrStr) {
  const groupsOfStr = {};
  arrStr.forEach((str, index) => {
    // n
    const reverseOfStr = strProductOfRotation(str, index); // Big O(string length) // i
    reverseOfStr.forEach((rstr) => {
      const index = arrStr.findIndex((a) => a === rstr[0]); // Big O(n) // n
      if (index > -1 && rstr[1] !== index) {
        if (groupsOfStr[str]) {
          groupsOfStr[str].push(rstr[0]);
        } else {
          groupsOfStr[str] = [rstr[0]];
        }
      }
    });
  });
  console.log(groupsOfStr);
}

function strProductOfRotation(str, index) {
  let groups = [];
  for (let i = 1; i < str.length; i++) {
    str = str.substring(1, str.length) + str[0];
    groups.push([str, index]);
  }
  return groups;
}
FindGroup(arrStr);
// // time complexity
// // i*n + n^2 -> n^2

// const arrStr = ["ab", "ba", "12", "21", "34", "44", "cd"];

// function findStringGroups(strList) {
//     if(strList.length === 0) return []
//     let groups = {}
//     for(let i=0;i<strList.length; i++) {
//         groups[i] = stringRotationList(strList[i])
//     }
//     strList((str, index) => {
//         const group = [str, ...groups[index]]
//         group.forEarch(g => {

//         })
//     })
//     console.log(groups)
// }

// function stringRotationList(str) {
//     let groups = []
//     for(let i=1; i<str.length; i++) {
//         str = str.substring(1, str.length)+str[0]
//         groups.push(str)
//     }
//     return groups
// }

// findStringGroups(arrStr)