const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const Interested = mongoose.model('interested');

module.exports = app => {
  app.post('/api',  async (req, res) => {
      console.log("trying to create a new interested")
      console.log( req.body)
    const { email } = req.body;
    const interested = new Interested({
      email,
      type: "user"
    });

    try {
      await interested.save();
      res.send({});
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
