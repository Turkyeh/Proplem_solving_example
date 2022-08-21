// console.log("swapp example use a higher order function ");
// console.log("swap the case of each character in a string Converting from uppercase letters to lowercase letters and vice versa ")

// let myname = prompt("Enter your name to chieck");
// console.log(myname);


// // // function swe(params) {
    
// // // }

// let swapping = myname. split("").map(function (ele) {
//     // if (ele == ele.toUpperCase) {
//     //     ele = ele.tolowercase();
//     // }
//     // else {
//     //     ele = ele.toUpperCase();
//     // }
//     // return ele;

//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();

// });
// console.log(swapping.join("|"));
// //////////////////////////////////////////////////

// // console.log("Converting from a negative number to a positive number and back");

// // let nume = [10, -20, 5, -4, 100, -3, -44, 1000];

// // let convert = nume.map(function (ele) {
// //     return -ele;//${ele} *-1}
    
// // });

// // console.log(nume);
// // console.log(convert);
// // //////////////////////////////////////////////////////////

// // console.log("Egnore a number and print a string ");


// // let st = ["12ahgbnms45i7"];
// // let mac = [];
// // let egnore = st.map(function (ele) {
// //     return isNaN(parseInt(ele)) ?ele : "";
    
// // });


// // console.log(egnore);


// // console.log( typeof window);
// // console.log(typeof console);
// // console.log(typeof window.localStorage);
// // //console.log(typeof window.location.href);
// // // console.log(typeof window.location.assign("https://google.com"));
// // let user = {
// //     name: "yasmen",
// //     age: 12,
// //     country: "jordan",

// //     sayhello: function () {
// //         return "hello";
// //     },
// // };

// // console.log(user.name);
// // console.log(user.sayhello);

// console.log("مذاغفات العدد");

// let arr = [10, 20, 4, 6, 7, 8, 2, 3, 100];

// ///with for
// let mat = [];

// for (let i = 0; i < arr.length; i++)
// {
//     mat.push(arr[i] + arr[i]);
    
// }
// console.log(mat);

// let adding = arr.map(function (ele,index,arr) {

//     // console.log(`${ele}`);
//     // console.log(`${index}`);
//     //     console.log(`${arr}`);



//     return ele + ele;

    
// });
// console.log(adding);

// adding = arr.map(ele => ele + ele);

    
// console.log(adding);

// console.log("Roww function Map with");

let namegroup = ["yasmen", "ahmad", "Ali", "dema", "hana"];

let namewithmap = namegroup.map(function (ele) {
    return ele + "a";
}
);

console.log(namewithmap);

///with filter
 namegroup = ["yasmen", "ahmad", "Ali", "dema", "hana"];

 namewithmap = namegroup.filter(function (ele) {
    return ele + "a";//return the same array does not excuite 
}
);

console.log(namewithmap);

namegroup = ["yasmen", "ahmad", "Ali", "dema", "hana"];
namewithmap = namegroup.filter(function (ele) {
    return ele.startsWith("a");
}
);

console.log(namewithmap);

console.log("even number with filter");
let num = [1, 2, 41, 25, 3, 6, 8, 10, 12, 18, 4, 7];

let even = num.filter(function (ele) {
    return ele % 2 === 0;//ele % 2 ===?true:false;
});
console.log(even);


console.log("delet a word that content more4 charchter");

let sentance = "I LOVE food code to playing mauch";

let word = sentance.split(" ").filter(function (ele) {
    
    return ele.length <= 4 ? ele : "";//when uousing map you should to write ?: the full condition 
});

console.log(word);
////////////////////////////////////////////////////

console.log("filter and map the word");
let mix = "A1385ZXCv125LK";

let fil = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
    
}).map(function (ele) {
    return ele * ele;  
});
console.log(fil);



console.log("adding using reduce  and return one value"); //reduce(functionn(accurment,current,index,arr),initialva)//0,1,1 he like ading a value to array //the rezelt one value
let nume2 = [10, 20, 30, 40, 50];

let adde = nume2.reduce(function (acc,cur,index,arr) {
    console.log(`${acc}  ${cur}  ${index}  ${arr} `);
    return acc + cur;

},5);
console.log(adde);

console.log("find a the biggest word in array");

let thebig = ["Bla", "programming", "much", "yasmen", "TYA "];
let m=0;
let max = thebig.reduce(function (accurment, current, index, array) {
    return accurment.length > current.length ? accurment : current;
    
});

console.log(max);
////////////////////////////////////////////////////////////////////

console.log("remove char in filter and reduce");

let removechars = ["Y", "A", "@", "@", "M", "E", "@", "E", "@", "N"];

let finalstring = removechars.filter(function (ele) {
    return ele !== "@";
    
});
console.log(finalstring);

finalstring = removechars.filter(function (ele) {//join
    return ele !== "@";
    
}).reduce(function (acc, cur) {
    return acc + cur;

});

console.log(finalstring);

let allli = document.querySelectorAll("ul li");

console.log((allli));

allli.forEach(function (ele) {
    console.log(ele.innerHTML );
    // return ele; not work
    ele.onclick = function () {
        console.log(this);
        //ele.classList.add("active");
});

// console.log(allli);














