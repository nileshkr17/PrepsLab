const express = require('express');
const {dbcnt} = require('./main');
// const {UserModel} = require('./models/UserModel');
// const {userRoute} = require('./Routes/UserRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// app.get("/users",userRoute);

// app.use("/user",userRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
}
);

app.listen(process.env.PORT ,async () => {
  try{
    await dbcnt();
    console.log(`DB Connected `);
    console.log(`Server Started ${process.env.PORT}`);

  }catch(error){
    console.log("DB Connection Failed");
  }
});
