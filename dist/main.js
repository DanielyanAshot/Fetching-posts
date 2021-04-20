"use strict";

var _api = require("./api");

var _postData = _interopRequireDefault(require("./postData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*I dont think i figured out the task well enough but i`m sure i could handle it, it would be great if you found some time to explain it so that i could complete it properly :)*/

/*I didnt figure out where i`m supposed to use the onPostSelect, onCommentSelect functions, and the async/await*/
var randomIdSelector = _postData["default"][Math.floor(Math.random() * _postData["default"].length)].id;

function onLoad() {
  (0, _api.wait)(1000).then(function () {
    return (0, _api.fetchPosts)();
  }).then(function () {
    return (0, _api.wait)(1000);
  }).then(function () {
    return (0, _api.fetchCommentsOfPost)(randomIdSelector);
  }).then(function () {
    return (0, _api.wait)(1000);
  }).then(function () {
    return (0, _api.fetchReactionsOfPost)(randomIdSelector);
  })["catch"](function () {
    return console.error("Oops there was an error");
  });
}

onLoad();