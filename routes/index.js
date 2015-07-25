var express = require('express');
var router = express.Router();
var o2x = require('object-to-xml');
var starwar = require('starwars');

var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query['echostr']);
  res.send(req.query['echostr']);
});

router.post('/', function(req, res, next) {
  var responseObject = {
    "xml": {
      "ToUserName" : "<![CDATA[" + req.body.xml.fromusername + "]]>",
      "FromUserName": "<![CDATA[" + req.body.xml.tousername +"]]>",
      "CreateTime": req.body.xml.createtime,
      "MsgType": "<![CDATA[" + req.body.xml.msgtype + "]]>",
      "Content": "<![CDATA[" + starwar() + "]]>"
    }
  };

  res.send(o2x(responseObject));
});

module.exports = router;
