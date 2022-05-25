import mysql from 'mysql';

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Muh*19932011',
  database : 'userTest',
  port: '3306'
});

db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySql is Connected...!!!!');
});

export default db;
