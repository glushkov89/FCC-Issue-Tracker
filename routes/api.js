/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = new Schema({
  issue_title: String,
  issue_text: String,
  created_on: Date,
  updated_on: Date,
  created_by: String,
  assigned_to: String,
  open: Boolean,
  status_text: String
});

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(function (req, res) {
      var project = req.params.project;
      //      console.log(project);
      res.send({
        project
      })
    })

    .post(function (req, res) {
      var project = req.params.project;
      //      console.log(project);
      res.send({
        project
      })
    })

    .put(function (req, res) {
      var project = req.params.project;
      //      console.log(project);
      res.send({
        project
      })
    })

    .delete(function (req, res) {
      var project = req.params.project;
      //      console.log(project);
      res.send({
        project
      })
    });

};