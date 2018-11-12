'use strict';

function countSameElements(collection) {
  var result = [];
  var exist = false;

  for (var i = 0; i < collection.length; i++) {
    exist = false
    for (var j = 0; j < result.length; j++) {
      if (collection[i].length > 1) {
        if (collection[i].includes('-')) {
          var str = collection[i].split("-");
          if (result[j].name == str[0]) {
            result[j].summary = result[j].summary + parseInt(str[1]);
            exist = true;
          }
        } else if (collection[i].includes('[')) {
          var str = collection[i].split("[");
          var str2 = str[1].split("]");
          if (result[j].name == str[0]) {
            result[j].summary = result[j].summary + parseInt(str2[0]);
            exist = true;
          }
        }
      } else if (result[j].name == collection[i]) {
        result[j].summary = result[j].summary + 1;
        exist = true;
      }
    }
    if (!exist) {
      if (collection[i].length > 1) {
        if (collection[i].includes('-')) {
          var str = collection[i].split("-");
          result.push({ "name": str[0], "summary": parseInt(str[1]) });
        } else if (collection[i].includes(':')) {
          var str = collection[i].split(":");
          result.push({ "name": str[0], "summary": parseInt(str[1]) });
        }
      } else {
        result.push({ "name": collection[i], "summary": 1 });
      }
    }
  }
  return result;
}
