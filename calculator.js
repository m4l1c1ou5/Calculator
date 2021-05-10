const express=require('express');
const bodyparser=require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    // console.log(req);
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    console.log(req.body.submit);
    var result=0;
    if(req.body.submit=="add"){
        result=num1+num2;
        res.send(result.toString());
    }
    else if(req.body.submit=="sub"){
        result=num1-num2;
        res.send(result.toString());
    }
    else if(req.body.submit=="mul"){
        result=num1*num2;
        res.send(result.toString());
    }
    else if(req.body.submit=="div" && num2!=0){
        result=num1/num2;
        res.send(result.toString());
    }
    else{
        res.send("Invalid Input");
    }
    // console.log(req);
});
app.listen(3000,function(req,res){
    console.log("HELLO");
});