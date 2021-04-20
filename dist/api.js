"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPosts = fetchPosts;
exports.fetchCommentsOfPost = fetchCommentsOfPost;
exports.fetchReactionsOfPost = fetchReactionsOfPost;
exports.wait = void 0;

var _postData = _interopRequireDefault(require("./postData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var wait = function wait(time) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, time);
  });
};

exports.wait = wait;

function fetchPosts() {
  setTimeout(function () {
    return _postData["default"].map(function (post) {
      var comments = post.comments,
          rest = _objectWithoutProperties(post, ["comments"]);

      console.log(rest);
      return rest;
    });
  }, 1000);
}

function fetchCommentsOfPost(id) {
  setTimeout(function () {
    return _postData["default"].find(function (post) {
      return post.id === id;
    }).comments.map(function (comment) {
      var reactions = comment.reactions,
          rest = _objectWithoutProperties(comment, ["reactions"]);

      console.log(rest);
      return rest;
    });
  }, 1000);
}

function fetchReactionsOfPost(id) {
  setTimeout(function () {
    var comments = _postData["default"].find(function (post) {
      return post.id === id;
    }).comments;

    console.log(comments[Math.floor(Math.random() * comments.length)].reactions);
    return comments[Math.floor(Math.random() * comments.length)].reactions;
  }, 1000);
}