//  functions
/*let average =function average(a,b,c){
    let sum=a+b+c;
    let calculating = sum/2;
    return calculating;
}
let av1=average(1,2,3);
console.log(av1);

// arrow function
let average = (a,b,c)=>{
    let sum=a+b+c;
    let calculating = sum/2;
    return calculating;
};
let av1=average(1,2,3);
console.log(av1);

// create a function to etract all the names from the object obj1
const obj1 = [
    {id: 1, name: "nanva"},
    {id: 2, name: "nasncb"},
    {id: 3, name: "ndoihif"}
];

function getNames() {
    let names = [];

    for (let i = 0; i < obj1.length; i++) {
        names.push(obj1[i].name);
    }

    return names;
}

console.log(getNames(obj1));

const obj1 = [
    {id: 1, name: "nanva"},
    {id: 2, name: "nasncb"},
    {id: 3, name: "ndoihif"}
];
function getNames() {

for (let i = 0; i < obj1.length; i++) {
        console.log(obj1[i].name);
}
}
getNames(obj1)


function sum(a,b){
    return a+b;
}
let ans1=sum

console.log(ans1)
let ans2=ans1(52,24)
console.log(ans2)



function  sayhello(){
    console.log("HI");
    return "huhr uvuhhr jur "
}
let ret1=sayhello;

let ret2 =ret1();
console.log(ret2)


function function1(fun,a){
    console.log("thhr husfsdbfb uhfbsd");
    fun(a)
}
function funtion2(a){
    console.log("fniwuef");
}
function1(funtion2,2);
console.dir(window)
console.dir(window.document.all[7].src)
 document.all[7].src="https://images.wallpapersden.com/image/download/black-panther-2018-movie_59997_1920x1200.jpg"
 let h1elements = document.getElementsByTagName("h1");
console.dir(h1elements);
h1elements[0].innerHTML = "changed";

// QUERY SELECTOR
let intro =  document.querySelector("#id1");
console.log(intro)
intro.innerHTML = "TODAY NEWS"
let intro1 =  document.querySelector("p");
console.dir(intro1)
let pimg=document.querySelector("img")
console.dir(pimg);
pimg.src="https://images.wallpapersden.com/image/download/black-panther-2018-movie_59997_1920x1200.jpg"


let pimg=document.querySelector("h1")
console.dir(pimg);
console.dir(pimg[1]);
pimg[1].innerHTML ="changed";


// query selector all
let pimg = document.querySelectorAll("li");
console.dir(pimg);
console.dir(pimg[1]);
pimg[2].innerHTML = "Natasha";*/


let lists = document.querySelectorAll("ol");
let items = lists[0].querySelectorAll("li");
items[2].innerHTML = "Natasha";


