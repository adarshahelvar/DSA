/*
    You have seen ols keypad phones which have buttons 1-9 and for each buttons we will be assigned with letters.
    so this question is same as that when user type numcer you need to give possible outcome of that array.
*/

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

/*
    You can see image of pattern in folder Images>>phoneNumberLetters.png
*/
// NOTE: NUMBER 1 DOESNOT CONTAINE ANY LETTERS

var phoneComb = function (digits) {
  if (digits.length == 0) return [];

  var ans = [];
  var data = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function helper(str, index) {
    if (str.length == digits.length) {
      ans.push(str);
    } else {
      let alpha = data[digits[index]];

      for (var i = 0; i < alpha.length; i++) {
        helper(str + alpha[i], index + 1);
      }
    }
  }

  helper("", 0);

  console.log(ans);
};
phoneComb("23");

/*  
>>>BreakDown
> str: This parameter represents the current string that is being constructed during the recursion. It starts as an empty string and gradually gets appended with letters from the keypad mapping.

> index: This parameter represents the current index of the digits array that is being processed. It helps to keep track of which digit's corresponding letters are currently being considered for appending to the str.

> if (str.length == digits.length): This condition checks if the length of the constructed string str is equal to the length of the input digits. If they are equal, it means all the digits have been processed, and a combination is complete. Hence, it adds the complete combination str to the ans array.

> else: If the length of the constructed string str is not equal to the length of the input digits, it means there are more digits to process and add to the string.

> let alpha = data[digits[index]];: This line retrieves the corresponding array of letters for the current digit from the data object. For example, if the current digit is "2," it will get ["a", "b", "c"] from the data object.

> for (var i = 0; i < alpha.length; i++) { ... }: This loop iterates through each letter in the alpha array and calls the helper function recursively with an updated str and index. The updated str will have the current letter appended to it, and the index will be incremented to move on to the next digit in the input digits.

> The recursion continues until all possible combinations of letters are generated for the given input digits. The ans array will eventually store all these combinations. The final result will be logged to the console when the phoneComb function is called with a specific input, as seen in the line phoneComb("23");.
*/
