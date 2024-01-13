const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3200;

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/dbusers?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// API routes
const influencerRoutes = require('./routes/influencer');
const userRoutes = require('./routes/users');
const ConfirmedUserRoutes = require('./routes/confirmedUsers');
const AttendeesRoutes = require('./routes/Attendees');
const lmsRoutes = require('./routes/lms');
const lmsuserRoutes = require('./routes/lmsuserRoute');
const McqRoutes = require('./routes/TestRoute');
const scoreRoutes = require('./routes/UserTestScore');
const AssmentsRoutes = require('./routes/assessmentRoutes');
const DataScienceRoutes = require('./routes/DataScienceRoute')

app.use('/api/influencers', influencerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/confirm', ConfirmedUserRoutes);
app.use('/api/attendee', AttendeesRoutes);
app.use('/api', lmsRoutes);
app.use('/api', McqRoutes);
app.use('/api', lmsuserRoutes);
app.use('/api', scoreRoutes);
app.use('/api', AssmentsRoutes);
app.use('/api', DataScienceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
