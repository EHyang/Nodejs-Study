const express = require('express');
var bodyParser = require('body-parser');
const xlsx = require('xlsx');
const axios = require('axios');
const cheerio = require('cheerio');

const request = require('request');
const readline = require('readline');

const wifia = require('node-wifi');
const dotenv = require('dotenv');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var app = express();

app.set('port', 3000);

dotenv.config();

wifia.init({
	iface: null // network interface, choose a random wifi interface if set to null
});
wifia.getCurrentConnections((error, currentConnections) => {
	console.log(currentConnections);
});

app.get('/test', function(req, res) {
  const excelFile = xlsx.readFile("list.xls");
  const sheetName = excelFile.SheetNames[0];
  const firstSheet = excelFile.Sheets[sheetName];

  const jsonData = xlsx.utils.sheet_to_json(firstSheet, {
    defval: ""
  });
  var text = "";
  text += "<html> <head> <title>z</title> </head> <body> <table border=3>";
  text += "<th>시도</th><th>의료기관명</th><th>주소</th>";
  for (var i = 0; i < jsonData.length; i++) {
    text += "<tr>";
    text += "<td>" + jsonData[i]['시도'] + "</td>";
    text += "<td>" + jsonData[i]['의료기관명'] + "</td>";
    text += "<td>" + jsonData[i]['주소'] + "</td>";
    text += '</tr>';
  }
  text += "</table> </body> </html>";
  res.send(text);
});

app.get('/list', async function(req, res) {
  let ulList = [];

  for (var i = 0; i < 31; i++) {
    const getHtml = async () => {
      try {
        return await axios.get("https://www.mohw.go.kr/react/ncov/selclinic04ls.jsp?page=" + encodeURIComponent(i));
      } catch (error) {
        console.error(error);
      }
    };

    getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const $bodyList = $("table.co_tb_base tbody.tb_center").children("tr");

      $bodyList.each(function(i, elem) {
        ulList[i] = {
          name: $(this).find('td.name strong').text()
        };
      });

      const data = ulList.filter(n => n.name);
      res.json(data);
    });
  }
});

app.get('/std', async function(req,res){
  let ready = (req.query.ready == 1) ? 1 : 0;



  res.json(ready)
})

app.get('/craw', function(req, res, next) {
  console.log("여기는 옴...");
  let all = [];
  let id = 1;

  const getHtml = async number => {
    let ulList = [];
    console.log(number);
    await axios.get(`https://www.mohw.go.kr/react/ncov/selclinic04ls.jsp?page=${number}`).then(html => {
      const $ = cheerio.load(html.data);
      const $bodyList = $("table.co_tb_base tbody.tb_center").children("tr");
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.name strong').text()) {
          console.log($(this).find('td.name strong').text());
          ulList[i] = {
            name: $(this).find('td.name strong').text()
          };
        } else {
          console.log("ㄴㄴ");
        }
      });
      all.push(ulList);
      //console.log(ulList);
      console.log(all);
      if (number === 30) {
        res.send(all);
      }
    });
  };
  for (var i = 1; i <= 30; i++) {
    getHtml(i);
  }
});

app.get('/craw2', async function(req, res, next) {
  let all = "";
  let id = 1;

  const getHtml = async number => {
    let ulList = "";
    await axios.get(`https://www.mohw.go.kr/react/ncov/selclinic04ls.jsp?page=${number}`).then(html => {
      const $ = cheerio.load(html.data);
      const $bodyList = $("table.co_tb_base tbody.tb_center").children("tr");
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.name strong').text()) {
          ulList += $(this).find('td.name strong').text() + '<br>';
        } else {
          console.log("ㄴㄴ");
        }
      });
      all += ulList;
      if (number === 30) {
        res.send(all);
      }
    });
  };
  for (var i = 1; i <= 30; i++) {
    console.log(i);
    await getHtml(i);
  }
});

app.get('/wwff', (req,res)=>{


  res.send(req.socket)
})

app.get('/wwww',(req,res)=>{
  dotenv.config()




  res.send(process.env.name)
})

app.listen(3000, () => {
  console.log('Express server listening on port ' + app.get('port'));
});
