 const URL="https://catfact.ninja/fact";
 async function getData(){
 let data=await fetch(URL);
 let final_data = await data.json();
console.log(final_data,fact);
}
getData();
/*/
setTimeout(() => {
    console.log("Hello")
    
}, 5000);

function greeting(){
    console.log("hello")
}
setTimeout(greeting,5000)


console.log("line 1")
console.log("line 2")
setTimeout(() =>{
    console.log("line 3")
},7000)
console.log("line 4")
setTimeout(() =>{
    console.log("line 5")
},7000)*/
