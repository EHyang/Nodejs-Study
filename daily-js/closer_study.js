// function closer_study1() {
//     var test = "클로저 테스트"

//     return function () { // 내부함수
//         console.log(test)
//     }
// }

// var closer_study2 = closer_study1()
// closer_study1() // 기존
// closer_study2() // 다음


// function test1(){
//     var t = "여기는 테스트1 함수입니다."
//     console.log(t)

//     return function (test)
//     {
//         t = test + "여기는 테스트2 함수입니다."
//         console.log(t)
//     }
// }

// test1()

// var test2 = test1()
// test2("안녕하세요 ")

function cls(){
    let time = 0

    setInterval(() => {
        time++
        console.log(time)
    }, 1000)
}

cls()
cls()