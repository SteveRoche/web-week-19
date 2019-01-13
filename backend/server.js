const express = require("express");
const app = express();
const mysql = require("mysql");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = 3001;

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "web_week_2019"
});

app.listen(PORT, err => {
	if (err) console.log(err);
	else console.log(`Listening on port ${PORT}!`);
});

app.post("/addStudent", (req, res) => {
	const postQuery =
		"INSERT INTO student(roll_no , academic_year , batch , semester , tg_contact , application_number , section , admitted_year , groupvalue , tg_name, tg_email) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
	connection.query(
		postQuery,
		[
			req.body.rollNo,
			req.body.academicYear,
			req.body.batch,
			req.body.semester,
			req.body.tgContact,
			req.body.applicationNumber,
			req.body.section,
			req.body.admittedYear,
			req.body.group,
			req.body.tgName,
			req.body.tgEmail
		],
		(err, _) => {
			if (err) {
				console.log(err);
				res.json({ status: "failure" });
			} else res.json({ status: "success" });
		}
	);
});

app.get("/getStudent/:rollNo", (req, res) => {
	const getQuery = "SELECT * FROM student WHERE roll_no=? LIMIT 1;";
	connection.query(getQuery, [req.params.rollNo], (err, rows, fields) => {
		if (err) console.log(err);
		else res.json(rows[0] || {});
	});
});
