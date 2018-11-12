'use strict';

function countSameElements(collection) {
  var result = [];
  var exist = false;

  for (var i = 0; i < collection.length; i++) {
    exist = false
    for (var j = 0; j < result.length; j++) {
      if (result[j].key == collection[i]) {
        result[j].count = result[j].count + 1;
        exist = true;
      }
    }
    if (!exist) {
      result.push({ "key": collection[i], "count": 1 });
    }
  }
  return result;
}
