'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let a of collectionA){
    for(let b of objectB['value']){
      if(a.key==b){
        a.count-=parseInt(a.count/3);
      }
    }
  }
  return collectionA;
}
