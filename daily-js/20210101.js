const express = require('express');
const app = express();

const classTemp = {
    1: {
        totalCount: 4,
        teacher: "teacher1"
    },
    2:{
        totalCount: 3,
        teacher: "teacher2"
    },
    3: {
        totalCount: 2,
        teacher: "teacher3"
    }
}

const studentTemp ={
    1:[
        {id: 1, name : "st1-1", math: 80, koeran: 60, english: 80},
        {id: 2, name : "st1-2", math: 70, koeran: 70, english: 80},
        {id: 3, name : "st1-3", math: 60, koeran: 60, english: 70},
        {id: 4, name : "st1-4", math: 40, koeran: 10, english: 90},
    ],
    2:[
        {id: 1, name : "st2-1", math: 80, koeran: 60, english: 80},
        {id: 2, name : "st2-2", math: 70, koeran: 70, english: 80},
        {id: 3, name : "st2-3", math: 60, koeran: 60, english: 70},
    ],
    3:[
        {id: 1, name : "st3-1", math: 80, koeran: 60, english: 80},
        {id: 2, name : "st3-2", math: 70, koeran: 70, english: 80},
    ]
}

app.get('/class/:classId/students',(req,res)=>{
    let {classId} = req.params
    return res.json({
        ...classTemp[classId],
        students: studentTemp[classId]
    })
})

app.set('port', 3000);
app.listen(3000, () => {
  console.log('Express server listening on port ' + app.get('port'));
});