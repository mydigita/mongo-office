const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users.route');
require('dotenv').config();
const taskRoutes = require('./routes/task-manager.route');
const cashRegister = require('./routes/cash-register.route');
const eventManager = require('./routes/event-manager.route');
const meetingRecord = require('./routes/meeting-record.route');

const app = express();
const port = process.env.PORT || 5000;


const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
.then(()=>console.log('- mongo connected!'))
.catch(err=>mongoose.connection.close());

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/mongo-office/accounts/', userRoutes);
app.use('/mongo-office/task-manager/', taskRoutes);
app.use('/mongo-office/cash-register/', cashRegister);
app.use('/mongo-office/event-manager/', eventManager);
app.use('/mongo-office/meeting-record/', meetingRecord);


app.listen(port, ()=>{
    console.log(`- Server is listening on port ${port}`);
})