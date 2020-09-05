const mongoose = require('mongoose');
const assert = require('assert');
const WordComparison = require('../models/WordComparison.model');

describe('mongodb functionality', () => {
  before(() => {
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
  });
  it('saves a record to the database', (done) => {
    const newWordComparison = new WordComparison({
      firstWord: 'hello',
      secondWord: 'world',
      anagram: false,
      firstWordPalindrome: false,
      secondWordPalindrome: false,
      timeToComplete: 2,
    });

    newWordComparison.save().then(() => {
      assert(!newWordComparison.isNew);
      done();
    });
  });
});
