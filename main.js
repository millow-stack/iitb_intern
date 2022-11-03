const express =   require("express");  
const multer  =   require('multer'); 
const path = require('path');

let app =   express(); 

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './public');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);
    x = file.originalname;
  }  
});  
var upload = multer({ storage : storage}).single('mediaFile'); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){  
      res.sendFile(__dirname + "/index.html");  
});  
  
app.post('/form',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {
        	console.log(err);
            return res.end("Error uploading file.");  
        }  
        res.sendFile(__dirname + '/public/' + x);  
    });  
});  

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

var server = app.listen(80, (err) => {
    var host = server.address().address || ''
    var port = server.address().port
    if (err) {
        throw err;
    }
    console.log('Example app listening at http://%s:%s', host, port)
    console.log('____________________________________________________________________________')
});
