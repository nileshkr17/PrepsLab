// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,2));

// function diff(a,b){
//     return a-b;
// }

// console.log(diff(1,2));

let a = [1,2,3,4,5,6,7,8,9,10];
a.push(11);

console.log(a);
console.log(a.pop());
console.log(a);



console.log("here")


// while(a.length>0){
//     console.log(a.pop());
// }

console.log("Even numbers");
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(a[i]);
    }
}


console.log("using map")
 a.map((item)=>{
    if(item%2==0){
        console.log(item);
    }
 });

console.log("Prime numbers")
    let i=2;
    while(i<=10)
    {
        let j=2;
        while(j<=i)
        {
            if(i%j==0)
            {
                break;
            }
            j++;
        }
        if(i==j)
        {
            console.log(i);
        }
        i++;
    }
