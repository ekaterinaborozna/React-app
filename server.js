
var port = process.env.PORT || 5000;
var express = require('express');
var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fetch = require('node-fetch');
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/css', express.static(__dirname + '/css'));
var path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));
//БД
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guests', {
    useNewUrlParser: true
});
require('./person.model');
var Person = mongoose.model('persons');
Person.find({})
    .then(function (persons) {
        console.log('Содержимое БД: ' + (persons));
    })
//Проверка соединения
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected to MongoDB!');
});
//удаление коллекции
/*db.dropCollection('persons');*/
 
//сюда выведем весь список сообщений
app.get('/api/hello', function (req, res) {
  /*res.send({ express: 'Hello From Expressss' });*/    
/*  res.send({ express: 'Ваши сообщения приняты:'+ userMessages }); */ 
    //вывод сообщений из БД
  
   Person.distinct("postmessage")
        .then(function (messages) {
            console.log('массив для вывода:');
            console.log(messages);
            /*userMessages.push(messages);*/
            /*res.send({ express: 'Ваши сообщения приняты:'+ messages});*/
            /*res.send({ express: 'Ваши сообщения приняты:'+ messages});*///что это : { express: }?
       res.send({messages: messages});
        })
        .catch(function (error) {
            console.log(error);
        });    
});
var userMessages = [];
app.post('/api/world', function (req, res) {
  console.log('данные из формы пришли в таком виде'); 
  console.log(req.body);
   newmess = req.body.postmessage;
    userMessages.push(newmess);
    console.log('массив сообщений');
    console.log(userMessages);
//Запись в БД
      var newperson = {
        postname: req.body.postname,
        postmessage: req.body.postmessage
      };
      Person.insertMany(newperson, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
          //Отправка приветствия  
          res.send(
    `Metric ${req.body.postname} updates`,
  );
       /* res.send(req.body);*/
    });
});
    app.post('/api/delete', function (req, res) {
        console.log('запрос на удаление пришел в таком виде: '); 
        console.log(req.body);
        deleteword = req.body.deleteword;
        console.log('deleteword='+deleteword);
        //удаление из БД
        Person.findOneAndDelete(
           {postmessage:req.body.deleteword}, function(err, result){
           console.log('удалено: '+result);   
           });
        //отправка оповещения об удалении                                                           
        res.send(
    `Key words ${req.body.deleteword} deleted`,
  );
        });

/*//БД
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});
require('./person.model');
var Person = mongoose.model('persons');
Person.find({})
    .then(function (persons) {
        console.log('Содержимое БД: ' + (persons));
    })
//Проверка соединения
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/forreact.html");
});
//Отправка данных для приветствия и запись в БД
app.post('/user', function (req, res) {
    var newperson = {
        name: JSON.stringify(req.body.name),
        message: JSON.stringify(req.body.message),
    };
    Person.insertMany(newperson, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.body);
    });
});

//Сохранение данных в массив
var userMessages = [];
app.post('/saveMessage', function (req, res) {
    newmess = req.body.message;
    userMessages.push(newmess);
    console.log(userMessages);
    res.send(userMessages);
});
app.get('/getAllMessages', function (req, res) {
    /* res.send(userMessages);*/
  /*  Person.distinct("message")
        .then(function (messages) {
            console.log('массив ' + messages);
            userMessages.push(messages);
            res.send(messages);
        })
        .catch(function (error) {
            console.log(error);
        });
})*/
app.listen(5000);
console.log("Мы отслеживаем порт 3000");

