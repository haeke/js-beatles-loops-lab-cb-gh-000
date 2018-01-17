
function theBeatlesPlay(musicians, instruments) {
  var tempArr = [];
  // loop through the musicians array
  for (var i = 0; i < musicians.length; i++) {
    tempArr[i] = musicians[i] + ' plays ' + instruments[i];
  }

  return tempArr;
}
