/* 
synch:1. Synchronous JavaScript
Definition: In synchronous programming, tasks are executed one after the other, in sequence. Each task waits for the previous one to finish before moving on to the next.
Blocking: If one task is time-consuming (like waiting for a file read or an API request), it blocks the execution of subsequent tasks until it finishes. This can lead to performance issues, especially in web applications with many tasks.
Example:j
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

*/
/* 2. Asynchronous JavaScript
Definition: Asynchronous programming allows tasks to be executed independently of the main program flow. Instead of waiting for a task to finish, JavaScript can move on to the next task and return to the previous one when it's ready (e.g., after a network request finishes).
Non-blocking: It allows the execution of other code while waiting for a task (such as an API call or file read) to complete. This improves performance and responsiveness.
Example (using setTimeout as an example of asynchronous behavior):
example
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
}, 1000); // This task will run after 1 second.

console.log("Task 3");
Output:
arduino
Copy code
Task 1
Task 3
Task 2
Even though Task 2 is supposed to be logged second, it is actually logged last because it is delayed by the setTimeout function.
Key Differences:
Blocking vs. Non-blocking: Synchronous code blocks further execution, while asynchronous code doesn't block and allows other tasks to run concurrently.
Use cases: Synchronous code is simple and intuitive, but asynchronous code is more efficient for tasks like network requests, reading files, or timers.
Asynchronous JavaScript Methods:
Callbacks: Functions that are passed as arguments to other functions and are executed later.
Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation.
Async/Await: Syntactic sugar over promises that makes asynchronous code look more like synchronous code.
Example of Promise: