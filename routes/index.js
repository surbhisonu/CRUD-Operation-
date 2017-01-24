var express = require('express');
var router = express.Router();
var Student=require("../models/student");
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/student/add', function(req, res, next) {
  res.render('add');
});
// router.post('/student/add', function(req, res, next) {
// 	var std = req.body;
// 	console.log(std)
// 	return res.json(std);
// });
router.post('/student/add', function(req, res, next ){
	//var student=req.body;
	//console.log(student)
	var data =req.body;
	var student= new Student(data);
	student.save(function(err,result){
        if(err) {
        	return res.json({
        	                      error:true, 
        	                      reason:err,
        	                    });
        }else{
        	return res.json({
        		              error:false
        	                });
        }
	});
	});

  router.get('/student/list', function(req, res, next) {
     Student.find({})
       .exec(function(err,students){
       	if(err)
       	       {}
            //students array of object
       		
       		else
       			{
       				res.render("list", {students:students});
       				//return res.json(students);
       			}
       		})
     });
 router.get('/student/edit/:studentId',function(req, res, next){
    Student.findOne({_id:req.params.studentId}).exec(function(err,student){
      return res.render("edit",{student:student})
    })
 });



 router.put('/student/edit/:studentId',function(req, res, next){
  console.log(113)
  var data = req.body;
    Student.findByIdAndUpdate({_id:req.params.studentId},data,{multi:false}, function(err){
    if(err){
         return res.json({error: true, reason:err});
    }else{
          return res.json({error:false});
    }
});
 });




 router.delete('/student/:studentId',function(req, res, next){
  console.log(req.params.studentId)
       Student.remove({_id:req.params.studentId},function(err){
        if (err){
          console.log(err);
         }
         else{
          return res.redirect('/student/list');
         }
       });     
 });

module.exports = router;
