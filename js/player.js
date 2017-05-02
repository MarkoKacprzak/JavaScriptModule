//define([], function() {
//var player = function() {
// private members
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

//return {
exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;
/*
 };
    //}();
});
*/