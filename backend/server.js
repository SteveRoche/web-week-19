const express = require('express');
const app = express();
const mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var connection = mysql.createConnection({
	host : 'localhost',
	user: 'codeportaluser',
	password: 'code',
	database: 'web_week_2019'
});

app.listen(3000, (err)=>{
	if(err)
		console.log(err);
	else
		console.log('Listening on port 3000!');
});

app.post('/addStudent', (req,res)=>{
	const postQuery = "INSERT INTO student(roll_no , academic_year , batch , semester , tg_contact , application_number , section , admitted_year , groupvalue , tg_name, tg_email) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
	connection.query(postQuery, [req.body.rollNo, req.body.academicYbear, req.body.batch, req.body.semester, req.body.TGContact, req.body.applicationNumber, req.body.section, req.body.admittedYear, req.body.group, req.body.TGName, req.body.TGEMail], (err,result)=>{
		if(err)
		{
			console.log(err);
			res.json({status:"failure"});
		}
		else
			res.json({status:"success"});
	});
});

app.get('/getStudent/:rollNo', (req,res)=>{
	const getQuery = "SELECT * FROM student WHERE roll_no=? LIMIT 1;";
	connection.query(getQuery, [req.params.rollNo], (err,rows,fields)=>{
		if(err)
			console.log(err);
		else
			res.json(rows);
	});
});