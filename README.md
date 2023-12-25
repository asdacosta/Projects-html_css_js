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
|`helloWorld.js`| Prints 'Hello, World!' upon function call. Located in `00_helloWorld` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`repeatString.js`| Takes two arguments, a string and number, and returns the string the number of times. Located in `01_repeatString` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`reverseString.js`| Reverses a string. Located in `02_reverseString` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`removeFromArray.js`| Takes an array as first argument and other additional arguments, then removes the additional arguments from the array. Located in `03_removeFromArray` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`sumAll.js`| Returns the sum of all numbers between and including two integers parsed as arguments. Located in `04_sumAll` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`fizzbuzz.js` | Prints numbers from 1 to user input with numbers divisible by 3, 5, and 3 & 5 replaced with Fizz, Buzz, and FizzBuzz strings correspondingly. It is associated with `fizzbuzz.html` file in `fizzbuzz` directory and it's built from `TheOdinProject`. Project focuses on `Problem Solving` in JavaScript. |
|`leapYears.js`| Determines whether a given year is a leap year(true) or not(false). Located in `06_leapYears` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`tempConversion.js`| Contains two functions: one converts Fahrenheit to Celsisus and vice versa. Located in `07_tempConversion` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`calculator.js`| Contains functions that adds, subtracts, finds the sum, multiplies, finds the power and factorial given parameters. Located in `08_calculator` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`palindromes.js`| Determines whether a given string is a palindrome without considering word breaks and punctuations *(Palindrome is a string that reads the same backwards or forwards)*. Located in `09_palindromes` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`fibonacci.js`| Returns the nth number in the Fibonacci sequence *(Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers)*. Located in `10_fibonacci` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`getTheTitles.js`| Returns an array of titles from an array of objects. Located in `11_getTheTitles` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript.|
|`findTheOldest.js`| Returns an object with the oldest person out of an array of objects.Located in `12_findTheOldest` directory and built from `TheOdinProject`. Project focuses on `Fundamentals` in JavaScript. |
|`mergesort.js`| Executable file that returns a sorted array using merge-sort logic. Located in `13_recursive` directory and build from `TheOdinProject`. Project focuses on `Recursion` in JavaScript.|
|`fib.js`| Returns a fibonacci sequence up to the defined argument using recursion logic. Located in `13_recursive` directory and build from `TheOdinProject`. Project focuses on `Recursion` in JavaScript.|
|`list.js`| Executable file that logs and returns methods in a linked list class. 

<details>
<summary>Features</summary>

* `append(value)`: Appends a `value` to the linked list.
* `prepend(value)`: Prepends a `value` to the linked list.
* `size()`: Returns the total number of nodes in the linked list.
* `getHeadNode()`: Returns the first node in the linked list.
* `getTailNode()`: Returns the last node in the linked list.
* `at(index)`: Returns the node at the `index`.
* `pop()`: Removes last node
* `contains(value)`: Returns True / False if `value` is in / not in the list correspondingly.
* `find(value)`: Returns the index of the `value` in the linked list.
* `toString()`: Returns a string readable format of the linked list.
* `insertAt(value, index)`: Inserts `value` at the `index`.
* `removeAt(index)`: Removes a node at the `index`

</details>

Located in `14_linkedList` directory and build from `TheOdinProject`. Project focuses on `Data Structures & Algorithms` in JavaScript.|




### Files in `core-blend` directory.

| File | Description |
| - | - |
|`college-research/*`| Research article divided into sections. [Research Website](https://asdacosta.github.io/core-html_css_js/).|


The docs directory is to follow the convention from GitHub for publishing the files as a website.