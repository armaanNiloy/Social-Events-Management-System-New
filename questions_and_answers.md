<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A
<i>the greeting variable is initialize with let, then an empty object is put on that variable. So, the greating variable have an empty object. If we print the greeting we oviously get an empty object.</i>




</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C


<i>If we add a string with an integer in javascript we will get a string in return. Here in function take two variable as parameter, then return the summation of a and b. The function is called by an interger 1 and a string '2'. So, according to rules function will concatenate 1 and '2' as '12' and return it.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A


<i>Here, food in an array and info is an object. Info have one element called favoriteFood what value is taken from food 0 index. In that case food value will never change because if we have to food 0 index value we must to write food[0]= 'something'. So, the food varible value remain as it is.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B


<i>Since sayHi() function does not sent any value as parameter of name, the name will be remain undefined. As the function return 'Hi there, name' dynamically it will return 'Hi there, undefined'.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C


<i>First of all, '0' is equal false and other then '0' every digit is true. In nums value we have one zero and three positive integer. And in forEach loop of nums ever nums value is check, and if it is true, it will add 1 with count and count was initilize as 0. Since we get three positve number, the summation of count must be 0+1+1+1 = 3. That is why in count we get 3.</i>

</p>
</details>
