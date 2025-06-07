import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"Permalist",
  password:"Vihashni@2785",
  port:5432
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
db.connect();

let items = [];

app.get("/", async(req, res) => {
  const result=await db.query("SELECT * from list");
  items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  console.log(item);
  const result=await db.query("Insert into list(title) values($1)",[item]);
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    await db.query("UPDATE list SET title = $1 WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Update Failed");
  }
});

app.post("/delete", async(req, res) => {
  const id=parseInt(req.body.deleteItemId);
  console.log(req.body);
  const result=await db.query("DELETE from list where id=$1",[id]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
