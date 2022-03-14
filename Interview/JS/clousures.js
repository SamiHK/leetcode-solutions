
function A(){

    let aa = 100;

    // after callstack passes B, its closure is created {aa: 100}
    function B (){
        //-> Local: B -> {  closure(A) : {aa: 101} , C: scopes -> {closure(A) : {aa: 101}}}
        console.log(aa);
    
        let bb = "000";
        let cc = 101;
    
        function C(){
            //-> Local: C -> {  closure(B) : {bb:'010', cc: 101}, closure(A): {aa: 101} }
            let dd = "..."
            console.log(cc + bb + dd);

            return cc + bb + dd;
        }

        bb = "010";
        //-> Local: B -> { closure(A): {aa: 101} , C : scope -> { closure(B): {bb: '010', cc: 101}, closure(A): {aa: 101} }}
        return C;
    }
    
    aa = 101;
    // after callstack passes above line, B's closure is updated {aa: 101}
    // -> Local: A -> B: scopes -> { closure(A): { aa: 101 }}
    return B;
}

let x = A(); // -> B: scopes -> { closure(A): { aa: 101 }}
let y = x(); // -> C() { scope-closure B: {aa: 101 }, C: {bb: 010, cc: 101}}
let z = y(); //

console.log(z);

// Closure : Function bundled with its lexical environment is known as a closure. 
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
// Its not just that function alone is returned but the entire closure and that's where it becomes interesting !! 