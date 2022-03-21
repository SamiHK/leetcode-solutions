// when you run a javascript program it creates a global context and a call stack
// the context is pushed into call-stack and code inside it is executed line by line.
// if there are any functions inside global call stack, upon their invokation they are also pushed into callstack and the LOC
// inside the function gets executed, if the code is completely inside internal function it gets deleted from the call stack
// the callstack instantly switches to execute instructions if there are any for example consider this:

// simple JS - global execution context
function main () {
    console.log("main");
}

main();
console.log("end");
// ------------------
// callstack |         |
//           |         |
//           |         |
//           |  main   |    -> gets executed by main() calling, and then deleted 
//           ----------- 

// callstack |         |
//           |         |
//           |         |
//           |         |    empty callstack after running everything successfully 
//           ----------- 

// console: 
//     main
//     end



// Now consider if our program uses any WebAPI, e.g. Timer in that case that execution is pushed into Browser's Global Context
// consider the following example

// sample event-queue and event-loop example
console.log("A: JS Context Start");
console.log("B: Passing context to browser");

setTimeout(function comeBack(){
    console.log("C: Program put into Event Queue -> Event Loop -> JS Callback Stack and gets executed instantly");
}, 2500);
console.log("D: JS Context End");


// callback stack      |  Browser Web APIs                     --------->   console        |
//                 |                                                        A              |
// |   |               |                                                    B              |
// |   | ----->comeback|                                                    D              |
// |GEC| xx            |               comeBack( timer goes 5,4,3,2,1,0)    C              |
// -----               ---------------------------------------------------------------------      
// \                                      |
//  \                                     | 
//   \                                    |
//    \ <- EventLoop ->  EventQueue[x,...n]

// here is what happened:
// global execution context is loaded onto call stack
// A: gets execution
// B: gets execution 
// C: is passed to browser to perform set time out after 5 seconds
// D: gets execution
// Global execution context is popped.
// After 5 seconds browser pushed the comabck function into Event Queue
// The EventLoop finds element in event queue and pushed it on the call stack
// the call stack now executed the LOC in the scope of settimeout -> pops it afterwards
// program ends


// sample event-listener and event-loop execution
console.log("\n\n\n\n\n\n\n\n");
console.log("A: JS GEC")

document.getElementById("btn")
.addEventListener("click", function cb (){
    // this event with label click for id (btn) will be stored in WebAPIs env, and be deleted if browser is closed.
    // if (n) times this is clicked then event queue[ cb(1), cb(2,....cb(n))];
    // now event-loop acts as gatekeeper as as soon as JS Callback Stack gets empty ->  this pushed CB from event queue to the stack and 
    // this is how it is done for every listener
    console.log("B: Wait over, someone clicked this button, now browser WebAPIs environment pushes");
});
console.log("C: exit")
// in theory
// GEC is pushed into stack
// starts execution
// A: JS GEX
// -> passed cb to browser WebAPIs env with label click
// B: exit
// C: someone clicked
// C: someone clicked





// Now lets jump into the Fetch() webAPI env
// Any communication that waits for a promise to get resolved, consider that following
// for promises/network calls, browser created a Microtask-Queue which have a higher priority than the event queue
// any task(promises and mutation observers(i.e. changes in DOM) gets higher priority) inside MicroTask queue will be picked by EventLoop first when the Callstack is empty 

console.log("\n\n\n\n\n\n\n\n");
console.log("A: JS GEC")

setTimeout(function CBT (){
    console.log("B: timer is back");
}, 5000);

fetch("https://api.netflix.com")
.then( 
   function CBF (){
      console.log("C: fetch is back");
   }
);

console.log("D: End")

//
// execution flow by assuming that Netflix servers respond within a second
// A: GEC 
//    -> CBT is stored in browser timer API env, it starts ticking for 5 seconds
//    -> CBF is stored in browser network calls env, and hits netflix server for data
// D: End

// now assume if fetch() gets data before timer, then
// C: fetch is back -> eventloop pushes is as CBS was empty
// B: timer is back -> eventloop pushes it as CBS was empty

// assume if both the timer completed and fetch() was completed simultaneously
// in this case since CBF was pushe to micro-task-queue and have a higher priority then then the CBT that is pushed to event-queue
// eventloop sees task ib both queue and as CBS was empty it pushed higher priority task i.e. CBF, after CBS completes its execution
// ecentloop now sees CBT in event-queue and pushed it.
//  C:
//  B:

// if timer complted before fetch()
// B:  cb timer
// C:  cb fetch


// suppose: if microtask queue have (n) tasks, and callback/event queue have 1 task only, the eventloop will only execute the 
// priority tasks first i.e. microtask queue tasks and then only it will execute tasks from callback/event queue


// suppose: if the microtask queue is filled with a task that created another promised callback and it goes on an on
// i.e. the tasks in microtasks queue is keep on coming and there was a task in callback/event queue, the tasks in callback queue might
// not get a chance to get executed and -> this state is called function starvation.
