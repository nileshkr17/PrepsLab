const express = require('express');
const userRoute = require('../Routes/UserRoute');
const {UserModel} = require('../models/UserModel');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {

});

