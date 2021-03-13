// asynchronous
// function test(){
//     var value = "callback test"

//     setTimeout(() => {
//         value = "modify"
//     }, 1000);

//     return value
// }

// console.log(test())

// callback
// function test(callbackfunc){
//     var value = "callback test"
//     setTimeout(()=>{
//         value = "modify"
//         callbackfunc(value)
//     },1000);
// }

// test(function(res){
//     console.log(res)
// })


// promise
// function test(){
//     var value = "callback test"

//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             value = "modify"
//             resolve(value)
//             reject(new Error("error"))
//         }, 1000)
//     })
// }

// test()
//     .then(function(res){
//         console.log(res)
//     })
//     .catch(function(err){
//         console.log(err)
//     })


//async await
function test1(value){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("modify")
        }, 1000)
    })
}

async function test() {
    var value = "callback Test"
    value = await test1(value)
    try{
        console.log(value)
    } catch(e){
        console.log(e)
    }
}

test()