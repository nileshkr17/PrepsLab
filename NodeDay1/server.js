const express = require('express');
const {dbcnt} = require('./main');
// const userRoute = require('./routes/Route');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
}
);

app.get('/register',async(req,res)=>{
    res.send("Register");
})

// app.use('/user',userRoute);
app.listen(process.env.PORT ,async () => {
  try{
    await dbcnt();
    console.log(`DB Connected `);
    console.log(`Server Started ${process.env.PORT}`);

  }catch(error){
    console.log("DB Connection Failed");
  }
});
