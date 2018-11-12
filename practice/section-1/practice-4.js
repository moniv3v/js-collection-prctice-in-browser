'use strict';

function collectSameElements(collectionA, objectB) {
  const sameElements = [];
  var count=0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB['value'].length;j++){
      if(collectionA[i]['key']==objectB['value'][j]){
        sameElements[count] = collectionA[i]['key'];
        count++
      }
    }
  }
  return sameElements;
}
