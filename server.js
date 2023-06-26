const express = require('express');
const bodyParser = require('body-parser')
const app = express();
let items=["Buy Food","Cook Food","Eat Food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/",function(req,res) {
    var today = new Date();
   // var currentDay=today.getDay();
   // var day ="";
   let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
   };
  let day=today.toLocaleDateString("en-US",options);
    // switch(currentDay)
    // {
    //     case 0:
    //         day="Sunday";
    //         break;
    //      case 1:
    //         day="Monday";
    //         break;
    //      case 2:
    //         day="Tuesday";
    //         break;  
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default: 
    //     console.log("Error: current day is equal to:" + currentDay);
    // }
    // if(currentDay===6 || currentDay===0)
    // {
    //     day="weekend";
    //   // res.render("list",{kindOfDay:day});
    //     // res.write("<h1>yay it's the weekend!</h1>");
    //    // res.sendFile(__dirname + "/weekend.html");
    // }
    // else{
    //     day="weekday";
    //    // res.write("<h1>Boo! I have to work</h1>");
    //    //res.sendFile(__dirname + "/weekday.html");
        
    // }
    res.render("list",{kindOfDay:day,newListItems :items});
});
   app.post("/",(req, res) => {
     let item=req.body.newItem;
    ///console.log(item);
    items.push(item);
    res.redirect("/");
   })
app.listen(3000,function(){
    console.log("server is listening on port 3000");
})