'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.map(a=>a.key).filter(a => collectionB.value.includes(a));
}

