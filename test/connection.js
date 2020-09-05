const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/word_comparison', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .once('open', () => {
    console.log('connected to db');
  })
  .on('error', (error) => {
    console.log(error);
  });
