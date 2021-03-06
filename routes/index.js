/*

 Copyright 2016 Viewpoint, Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

var express = require('express');
var router = express.Router();
var projectormodel = require('../modules/projectormodel');
var appConfig = require("../modules/appConfig.js");



/* GET home page. */
router.get('/', function(req, res, next) {

  var kanbanModel = projectormodel.loadFromFile(wwwConfig.modelStorageFile);

  res.render('index', {
    title: 'Kanban Reports',
    kanbanModel: kanbanModel,
    configFromServer: appConfig.getConfig()
  });
});

router.get('/sim', function(req, res, next) {

  res.render('sim', {
    title: 'Project Simulator'
  });
});

module.exports = router;
