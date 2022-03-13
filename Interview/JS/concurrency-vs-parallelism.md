## Concurrency

You are trying to two tasks, you are trying to cleanup your room and also trying to cook food

cleanup-room ----> | [10 mins] |           |--> [7 mins]--|>
                   |           |           |              |
                   |  cook-food| [5 mins]  |        ----> | [4 mins] 

You are doing two different tasks by doing context switching very fast
but you are doing one task at a time in a sequence. This is caled Concurrency.




## Parallelism 

It means that you are actually doing something e.g. cooking-food, and someone else is doing another job i.e. cleaning-room but both the tasks are happening at the same time, it is called as parallelism


cleanup-room ----->------->------->------>
cooking-food ----->------->------->------>


----------- nodejs context---------

In context of nodejs if a CPU is single core, nodeJS will run in a concurrent model

i.e. it will execute some tasks, then offload some to OS(promises/ network/async-await calls in microtask) and browser(event-queue/callbacks) and execute some other tasks untill the callbacks are enqueued into microtask/callback-event-queue, there the event-loop will pick the priority (microtask) items then event-callbacks into the execution CallStack and get it executed.

In this way a single threaded nodeJS callStack can behave in a concurrent fashion and, js-waits-for-none(asynchronous)


Note: to run nodeJs parallelly then you need nore than a single core CPU with UV_THREADPOOL_SIZE = number(more thn 1), if that happens then in this case NodeJS can be running the (n) number of requests in parallel as per the set/available CPU cores.
// so in this case every nodeJs thread will run in parallel and would also do context-switching(concurrency).




