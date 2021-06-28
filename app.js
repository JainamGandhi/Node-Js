const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log("YOHOOOOO Connected");
});

const app = express();

app.get('/createdb',(req,res)=>{
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql ,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('DATABASE Created');
  });
});

app.get('/createtable',(req,res)=>{
  let sql= 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('table zaalaa')
  });
});

app.get('/insertpost',(req,res)=>{
  let post = {title: 'POST1' ,body: 'heyyyyyyyaaaaa'};
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Post 1 zallla');
  });
});
app.get('/insertpost2',(req,res)=>{
  let post = {title: 'POST2' ,body: 'hi love'};
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Post 2 zallla');
  });
});
app.get('/getpost/:id',(req,res)=>{

  let sql = `SELECT * FROM posts WHERE id= ${req.params.id}`;
  let query = db.query(sql,(err,results)=>{
    if(err) throw err;
    console.log(results);
    res.send('Post Fetched');
  });
});
app.get('/update/:id',(req,res)=>{
  let newTitle = 'Updateddddd'
  let sql = `UPDATE posts SET title='${newTitle}' WHERE id= ${req.params.id}`;
  let query = db.query(sql,(err,results)=>{
    if(err) throw err;
    console.log(results);
    res.send('Post Fetched');
  });
});



app.listen('3000', ()=>{
  console.log('love you 3000');
}
);
