'use strict';

var 
  couchapp = require('couchapp'),
  path = require('path'),
  ddoc = {
    _id: '_design/site-dgd-fortaleza',
    views: {},
    lists: {},
    shows: {}
  };

module.exports = ddoc;

couchapp.loadAttachments(ddoc, path.join(__dirname, 'app'));