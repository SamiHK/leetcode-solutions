### NodeJS Architecture

1. All Operating system have some cores of CPU that execute tasks coming from scheduler.

----->  [ core 1 ] <----> [core 2] <----> [core 3] <--> [core 4] <---

-------------------- Scheduler --------------------------------------

----> p1(node), p2,p3(node),p4(node),p5,p6(node),p7,p8(node),p9------>

---------------------Operating System -------------------------------



## Node Runtime

1. NodeJS is a Runtime Environment -> sits on top LibUV(c++) -> OS
2. LibUV is like V8-engine(which is synchoronous, works on CallStack),
is a component inside NodeJS Runtime and connects OS -> V8, and is responsible for everything Asynchoronous in NodeJS.


--------------------- NODE JS RUNTIME ---------------------------
                             --------------          ------------
    [      ]                 |    queue   | <------- |   OS     |
    [ code ]  <--- Callbacks |  [ done ]  |          | Scheduler|
    [      ]                 |  [ done ]  | -------> |          |
       V8                    --------------          |----------|
  Synchronous                    LibUV
                                / event \
                               <  loop   >
                                \ ---- /  
                             Asynchronous
-----------------------------------------------------------




// lets take example of BCrypt.
// if you install BCrypt -> npm i -g bcrypt 
// this library have c++ binary to hash strings into encoded-secure hashes
// $2y$10$1hjg1g3j1gh1gj1gj1g3j1g3j1.fd0/toos/23hvh323jgj1j21j2j12j12
<!-- $algorithm$AlgoOptions$Salt.HashedPassword -->

// now this c++ binary is async and can make use of LibUV to speed-up a lot when it comes to hashing.


 <!-- 500 parallel https requests on /signup endpoint -->
 <!-- bcrypt function will call libUV for encoding password -->
 <!-- LibUV will return reponse of Bcrypt promise as callback-->

   |------    /signup
 ->|  H  |  500
 ->|  T  | -----=> bcrypt()
 ->|  T  |         .then(()=>{});
 ->|  P  |                 ||
   |------              ---------
                        | LibUV |------->ThredPool[#1 bcry][#2 bcry]
                        |-------|        |         [#3 bcry][#4 bcry]
                        |  V8   |        |
                        |-------|        |
                        | NodeJS|        |
                        |-------|        |
                                         |
                                         |
                        [5 bcry, 6,7,8......500 bcry]                 


                        when the threadpool is filled libUV puts incoming requests in a queue FCFS Strategy, as the threadpool executes a thread and responds, it s then gets populated by libUV queue's first task.


                        Note: threadpool throws its threads into scheduler and decdicated cores and execute lets say 4 programs parallely, if the CPU have only one core in that case only one program can be executed in parallel...
                        if CPU have ore decdicated cores for NodeJs program then in that case threadpool can throw equal number of tasks to be executed in parallel.

                        here 4 bcrypt programs can be executed in parallel and rest 496 can wait in LibUV queue and wait for their turn.

                        Once cores compute the results they transfer it to threadpool -> libUV -> V8 -> Node Runtime

                        if 1 call executed in 1 second, then here 4 calls can be executed in 1 second. then next 4 calls in next second... etc.


<!-- LibUV  connects with OS using a thread-pool -->
                                  
                                 /------- ()  () ------ [*]----|
    new task      task queue   /                               |
 ----> [] ----> [][][][][][][] ---------- ()  () --------------|
                               \                              [*]
                                \-------- ()  () ------ [*]----| 
                                                               |
                                                               |
  <-----[*]--------------[*]-------------------[*]-------------|
                    Completed tasks

------------------     Thread Pool      ------------------------


Ideally: the threadpool size should be equal to the size of cores available.

If threadpool is smaller then dedicated cores then here we are wasting CPU. As some of cores will remain Idle.

If threadpool is bigger than dedicated cores then in this case we are overdoing the scheduler as it will have to do  lot of context switching in order to keep up with every inreasing threedpool tasks.
As context switching will also have its own time

you can set threadpool size using

`UV_THREADPOOL_SIZE = number`




