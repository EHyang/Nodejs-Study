var sayNode = function () {
    console.log('Node');
};

var es = 'ES';

/*

var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic';

oldObject.sayNode();
oldObject.sayJS();

console.log(oldObject.ES6);

//oldObject 객체에 동적으로 속성 추가

*/

/*

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic'
};

newObject.sayNode();
newObject.sayJS();

console.log(newObject.ES6);

*/

//------------------------------------

// 더히가 4가지 표현

/*

function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

console.log(add1(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(add4(1,2));

*/

//------------------------------------

/*
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        })
    }
};

relationship1.logFriends();
*/
/*
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};

relationship2.logFriends();
*/

//------------------------------------


/*
const condition = false;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('success');
    } else {
        reject('failed');
    }
});

promise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });
*/

//------------------------------------

