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
const CloudRoutes = require('./routes/CloudRouter')
const TrialRoutes = require('./routes/courseFreeTrial')
const ChatRoutes = require('./routes/ChatRoutes')
const JavaRoutes = require('./routes/JavaRoutes')
const JobRoutes = require('./routes/JobsRoutes')
const AngularRoutes = require('./routes/AngularRoutes')
const EnquiryRoutes = require('./routes/EnquiryRoute')
const PythonRoutes = require('./routes/Python')
const awsRoutes = require('./routes/aws')
const college = require('./routes/college')
const contact = require('./routes/contact');
const isha = require('./routes/isha');

app.use('/api/influencers', influencerRoutes);
app.use('/api/mern', userRoutes);
app.use('/api/confirm', ConfirmedUserRoutes);
app.use('/api/attendee', AttendeesRoutes);
app.use('/api', lmsRoutes);
app.use('/api', McqRoutes);
app.use('/api', lmsuserRoutes);
app.use('/api', scoreRoutes);
app.use('/api', AssmentsRoutes);
app.use('/api', DataScienceRoutes);
app.use('/api', CloudRoutes);
app.use('/api', ChatRoutes);
app.use('/api', JavaRoutes);
app.use('/api', JobRoutes);
app.use('/api', AngularRoutes);
app.use('/api', EnquiryRoutes);
app.use('/api', PythonRoutes);
app.use('/api', awsRoutes);
app.use('/api', TrialRoutes);
app.use('/api', college);
app.use('/api', contact);
app.use('/isha/api', isha);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
