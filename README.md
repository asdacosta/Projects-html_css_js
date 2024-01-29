# HTML, CSS & JS 

## Project Origin
Codecademy, InternetingIsHard, TheOdinProject

## Project Objective
Aims to build projects using HTML, CSS, and JavaScript.

## Project Relevance
To solidify all foundations learnt in HTML, CSS, and JavaScript by building real projects.

## Intended Audience
Developers, users, and recruiters.

## Technologies
* `Xbuntu` in Terminal
* `VS Code `
* `Vi` text editor

## Files
### Files in `core-html` directory.

| File | Description |
| - | - |
|`fashion_blog.html`| A raw html fashion clothing website built from `Codecademy`. Project focuses on the topic `Elements & Structure` in HTML.|
|`wine_festival.html`| A raw html festival schedule website built from `Codecademy`. Project focuses on the topic `Tables` in HTML.|
|`form_story.html`| A raw html form website built from `Codecademy`. Project focuses on the topic `Forms` in HTML.|
|`nyc_blog.html`| A raw html New York City bloq built from `Codecademy`. Project focuses on the topic `Semantic HTML` in HTML.|

### Files in `core-css` directory.

| File | Description |
| - | - |
|`reset.css`| Stylesheet to remove default styling provided by web browsers. This helps to always start with a consistent baseline across different web browsers.|
|`recipe.css`| Stylesheet for `recipe.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `Syntax & Selectors` in CSS.|
|`portfolio.css`| Stylesheet for `portfolio.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `Visual Rules` in CSS.|
|`burger.css`| Stylesheet for `burger.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `The Box Model` in CSS.|
|`broadway.css`| Stylesheet for `broadway.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `Display & Positioning` in CSS.|
|`paint.css`| Stylesheet for `paint.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `Colors` in CSS.| 
|`typo.css`| Stylesheet for `typo.html` in `html_files` directory and it's built from `Codecademy`. Project focuses on the topic `Typography` in CSS.|
|`flexbox/styles.css`| Stylesheet for `flexbox.html`, all located in `flexbox` directory. Project is built from `InternetingIsHard` and focuses on the topic `Flexbox` in CSS.|

### Files in `core-js` directory.
Most of the JavaScript files are in directories that contain `algorithm.txt` and `file_name.spec.js` which contains the pseudo-code and test conditions correspondingly for the files. 

#### Users
To test a particular condition in a test file, append all other test conditions in it with `.skip` and run:

```shell
npm test file_name.spec.js
```

Running it without any changes to the test file will test all conditions on the JavaScript file and the expected output should be `n passed, n total`. <br>
NB: npm should be installed already and after copying the files, run:

```shell
npm install
```

This will make use of the dependencies `package.json` and `package-lock.json` to set configurations to aid you run the test files.

| File | Description |
| - | - |
|`00_helloWorld/helloWorld.js`| Prints 'Hello, World!' upon function call. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`01_repeatString/repeatString.js`| Takes two arguments, a string and number, and returns the string the number of times. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`02_reverseString/reverseString.js`| Reverses a string. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`03_removeFromArray/removeFromArray.js`| Takes an array as first argument and other additional arguments, then removes the additional arguments from the array. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`04_sumAll/sumAll.js`| Returns the sum of all numbers between and including two integers parsed as arguments. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`fizzbuzz/fizzbuzz.js` | Prints numbers from 1 to user input with numbers divisible by 3, 5, and 3 & 5 replaced with Fizz, Buzz, and FizzBuzz strings correspondingly. It is associated with `fizzbuzz.html` file and it's built from `TheOdinProject`. Project focuses on `Problem Solving` in JavaScript.|
|`06_leapYears/leapYears.js`| Determines whether a given year is a leap year(true) or not(false). Built from `TheOdinProject` and it focuses on `Fundamentals` in JavaScript.|
|`07_tempConversion/tempConversion.js`| Contains two functions: one converts Fahrenheit to Celsisus and vice versa. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`08_calculator/calculator.js`| Contains functions that adds, subtracts, finds the sum, multiplies, finds the power and factorial given parameters. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`09_palindromes/palindromes.js`| Determines whether a given string is a palindrome without considering word breaks and punctuations *(Palindrome is a string that reads the same backwards or forwards)*. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`10_fibonacci/fibonacci.js`| Returns the nth number in the Fibonacci sequence *(Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers)*. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`11_getTheTitles/getTheTitles.js`| Returns an array of titles from an array of objects. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript.|
|`12_findTheOldest/findTheOldest.js`| Returns an object with the oldest person out of an array of objects. Built from `TheOdinProject` and focuses on `Fundamentals` in JavaScript. |
|`13_recursive/mergesort.js`| Executable file that returns a sorted array using merge-sort logic. Built from `TheOdinProject` and focuses on `Recursion` in JavaScript.|
|`13_recursive/fib.js`| Returns a fibonacci sequence up to the defined argument using recursion logic. Built from `TheOdinProject` and focuses on `Recursion` in JavaScript.|
|`17_knightMoves/chessKnight.js`| Returns shortest path from initial square to final square in a chess board. Built from `TheOdinProject` and focuses on `Data Structures & Algorithms` in JavaScript.|
|`18_jestTests/jest.js`| Contains functions to be tested with `18_jestTests/jest.test.js`. Built from `TheOdinProject` and focuses on `Testing` in JavaScript.|

### Complex Scripts
`14_linkedList/list.js`: Executable file that logs and returns methods in a linked list class. Built from `TheOdinProject` and focuses on `Data Structures & Algorithms` in JavaScript.

<details>
<summary>Methods</summary>

* `isEmpty()`: Checks if list is empty.
* `append(value)`: Appends a `value` to the linked list.
* `prepend(value)`: Prepends a `value` to the linked list.
* `size()`: Returns the total number of nodes in the linked list.
* `getHeadNode()`: Returns the first node in the linked list.
* `getTailNode()`: Returns the last node in the linked list.
* `at(index)`: Returns the node at the `index`.
* `pop()`: Removes last node.
* `contains(value)`: Returns True / False if `value` is in / not in the list correspondingly.
* `find(value)`: Returns the index of the `value` in the linked list.
* `toString()`: Returns a string readable format of the linked list.
* `insertAt(value, index)`: Inserts `value` at the `index`.
* `removeAt(index)`: Removes a node at the `index`.

</details>            

`15_binarySearch/bst.js`: Builds a tree with `tree(array)` with various methods. Built from `TheOdinProject` and focuses on `Data Structures & Algorithms` in JavaScript.

`15_binarySearch/script.js`: Creates a BST from an array of random numbers less than 50, then uses the methods.

<details>
<summary>Methods</summary>

* `prettyPrint()`: Logs tree in structured format.
* `insert(value)`: Inserts a node with `value` into the tree.
* `delete(value)`: Deletes a node with `value` from the tree.
* `find(value)`: Finds the node with the specified value.
* `levelOrder(callback)`: Accepts any optional `callback`, traverses the tree in breadth-first order, and provides each node as an argument to the `callback`. Returns an array of node-values if no `callback` is specified.
* `inOrder(callback)`: Accepts any optional `callback`, traverses the tree in depth-first order left-root-right. Returns an array of node-values of if no `callback` is specified.
* `preOrder(callback)`: Accepts any optional `callback`, traverses the tree in depth-first order root-left-right. Returns an array of node-values of if no `callback` is specified.
* `postOrder(callback)`: Accepts any optional `callback`, traverses the tree in depth-first order left-right-root. Returns an array of node-values of if no `callback` is specified.
* `height(value)`: Accepts a node-value and returns its height. Returns height of root if no `value` is specified.
* `depth(value)`: Accepts a node-value and returns its depth. Returns depth of root if no `value` is specified.
* `isBalanced()`: Checks if tree is balanced.
* `rebalance()`: Re-balances a tree.

</details>

`16_hashMap/hashMap.js`: Builds a hash map with various methods. Built from `TheOdinProject` and focuses on `Data Structures & Algorithms` in JavaScript.

<details>
<summary>Methods</summary>

* `hash(value)`: Produces `value`'s hash code.
* `set(key, value)`: Sets a `key`-`value` pair in a bucket the hash map.
* `get(key)`: Gets the value of `key`.
* `has(key)`: Returns true/false depending on whether `key` is in the hash map.
* `remove(key)`: Removes entry with the `key`.
* `length()`: Returns number of stored keys in the hash map.
* `clear()`: Removes all entries in the hash map.
* `keys()`: Returns an array of all keys inside the hash map.
* `values()`: Returns an array of all values inside the hash map.
* `entries()`: Returns an array of key-value pairs.

</details>

### Files in `core-blend` directory.

| File | Description |
| - | - |
|`college-research/*`| Research article divided into sections. [Research Website](https://asdacosta.github.io/core-html_css_js/).|


The docs directory is to follow the convention from GitHub for publishing the files as a website.