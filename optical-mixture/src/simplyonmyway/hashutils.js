goog.provide('simplyonmyway.hashutils');

/**
 * @param {number} projectNum Art Blocks project number
 * @return {Object} 
 */
simplyonmyway.hashutils.genTokenData = function(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
  return data;
}
