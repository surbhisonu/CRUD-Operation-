var mongoose = require("mongoose")
var StudentSchema = new mongoose.Schema({
   regNo    :{
               type    : String,
               unique  :true,
               required:true,
             } ,
   rollNo : Number,
   name:{
        	firstName : String,
   	        lastName  : String,
        },
   age    : Number,
   college: String,
   address:{
                city    : String,
            	country : String,
   	            state   : String,
            } 
})
module.exports= mongoose.model("Student",StudentSchema)