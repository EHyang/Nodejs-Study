const express = require('express');
var bodyParser = require('body-parser');
const xlsx = require('xlsx');

var app = express();

app.set('port', 3000);

app.get('/test', function(req,res) {
  const excelFile = xlsx.readFile( "list.xls" );
  const sheetName = excelFile.SheetNames[0];
  const firstSheet = excelFile.Sheets[sheetName];

  const jsonData = xlsx.utils.sheet_to_json(firstSheet, {defval : ""});
  var text = "";
  text += "<html> <head> <title>z</title> </head> <body> <table border=3>";
  text += "<th>시도</th><th>의료기관명</th><th>주소</th>";
  for(var i = 0; i<jsonData.length; i++)
  {
    text += "<tr>";
    text += "<td>" + jsonData[i]['시도'] +"</td>";
    text += "<td>" + jsonData[i]['의료기관명'] + "</td>";
    text += "<td>" + jsonData[i]['주소'] + "</td>";
    text += '</tr>';
  }
  text += "</table> </body> </html>";
  res.send(text);
});

app.listen(3000, () => {
  console.log('Express server listening on port ' + app.get('port'));
});
