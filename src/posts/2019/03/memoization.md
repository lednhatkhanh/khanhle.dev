---
path: '/blog/memoization'
date: '2019-03-03'
title: 'Memoization'
---

So I started the Coding Interview Bootcamp course by Stephen Grider and found something really interesting in the course (at least for me): use memoization to speed up function call.

<!-- end -->

In case you want to learn or to review algorithms and data structure and you use **JavaScript** as the main language like me then I suggest you take the [course](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/), he teaches all the popular problems from basic to advanced in detail.

So, back to the main thing, what is **memoization**? Memoization is a technique used to speed up function by call by caching the return value so we don't have to calculate it again.

For example, we have the recursive code to get the n-th number in the Fibonacci series:

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Easy, right? Most of us knows the famous fibonacci problem and the code is quite easy to understand, but do you know the time complexity of this one? It's **O(2^n)**! Try running the function with `n = 45` and you will see.

So, how can we speed it up? If you take a look closer, you will see that some function call with some specific input values, especially `fibonacci(1)` and `fibonacci(2)` gets called many times during the process, so by using memoization, we can cache the value of these function call and reduce the execution time.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

const cachedFibonacci = memoize(function(n) {
  if (n < 2) {
    return n;
  }

  return cachedFibonacci(n - 1) + cachedFibonacci(n - 2);
});
```

We now have the cached version of the `fibonacci` function, try use this one instead of the normal one and see the different:

```javascript
fibonacci(39); // 600ms

cachedFibonacci(39); // 1ms
```

I used `performance.now()` to compare the two functions and the cached one only takes 1ms to execute, imagine we use a bigger input value then the different will be even greater.

One thing to notice, that memoization can only be used on **pure functions**, they are functions that can only access their input and the return value can only be determine by the input values without any side effect.

That's it, that's the most basic knowledge about memoization.

## Resources

- [What is a pure function in Javascript.](https://medium.freecodecamp.org/what-is-a-pure-function-in-javascript-acb887375dfe)
- [Implementing Memoization in JavaScript.](https://www.sitepoint.com/implementing-memoization-in-javascript/)
