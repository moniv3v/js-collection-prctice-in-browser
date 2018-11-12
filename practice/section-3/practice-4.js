'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];

  for (let a of collectionA) {
    var exist = false;
    for (let c of collectionC) {
      if (c.key == a) {
        c.count = c.count + 1;
        exist = true;
      }
    }
    if (!exist) {
      if(a.length>1){        
        var str = a.split('-');
        collectionC.push({ "key": str[0], "count": parseInt(str[1]) });
      }else{
        collectionC.push({ "key": a, "count": 1 });
      }
      
    }
  }
  for (let b of objectB['value']) {
    for (let c of collectionC) {
      if (c.key == b) {
        c.count -= parseInt(c.count / 3);
      }
    }
  }
  return collectionC;
}
