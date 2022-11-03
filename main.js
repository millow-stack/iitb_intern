var express =   require("express");  
var multer  =   require('multer'); 
var path = require('path');

var app =   express(); 

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

app.listen(80,function(){  
    console.log("Server is running on port 80");  
});  