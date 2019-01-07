const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "codeportaluser",
	password: "code",
	database: "web_week_2019"
});

connection.connect();

connection.query(
	"CREATE TABLE student(id INT AUTO_INCREMENT, roll_no INT, academic_year VARCHAR(100), batch INT, semester INT, tg_contact VARCHAR(100), application_number INT, section VARCHAR(100), admitted_year VARCHAR(100), groupvalue VARCHAR(100), tg_name VARCHAR(100), tg_email VARCHAR(100), PRIMARY KEY(id));",
	(err, result) => {
		if (err) console.log(err);
		else console.log(result);
	}
);
