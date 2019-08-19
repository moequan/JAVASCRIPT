//OBJECTS   

//Creating an object

// let myCar = {
//     make : `Ford`,
//     model : `Mustang`,
//     year : 1969
// };

// console.log(myCar);
// console.log(myCar.model);
// console.log(myCar.make);
// console.log(myCar.year);

//Assigning values to properties

let myCar = {};
myCar.model = `Mustang`;
myCar.make = `Ford`;
myCar.year = 1969;

console.log(myCar);
console.log(myCar.model);
console.log(myCar.make);
console.log(myCar.year);

//Array Info 

var info = [`John`, `Schulz`, 32, `Berlin`]
console.log(info[0])

var objInfo = {
    firstName: `John`,
    lastName: `Schulz`,
    age: 32,
    city: `Berlin`
}
console.log(objInfo.firstName)

var family = {
    children: [{
            age: 3,
            name: `paul`
        },
        {
            age: 4,
            name: `susi`
        }
    ],
    father: `peter`,
    mother: `sandra`
};
console.log(family)
console.log(family.children[1].name)

//complex objects

var appleTree = {
    apples: [{
            color: `red`,
            taste: `very`,
            num: 12,
            size: [`big`,
                `small`,
                `medium`
            ]
        },
        {
            color: `yellow`,
            taste: `very`,
            num: 11
        }
    ],
    tree: `wonderful`
};
console.log(appleTree.apples[1].num);
console.log(appleTree.apples[0].size[2]);


let user = {
    name: `John`,
    age: 30
};
user.isAdmin=true;
console.log(user);

delete user.age 
console.log(user)

let user2 = {
    name:`John`,
    age:30,
    "Like birds": true
}

// console.log(user2)    //{ name: 'John', age: 30, 'Like birds': true }
// console.log(user.like birds)  //Error, property can not be with space
// console.log(user."like birds") //Error, property can not assign as string

let user3={};
user3["like birds"]=true;
console.log(user3)

delete user3["like birds"]
console.log(user3)

let fruit="kiwi";
let fruitBucket={
    [fruit]:5
};
console.log(fruitBucket) //Computed properties