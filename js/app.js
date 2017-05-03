define(['./player', './game'], function(player, game) {
    /* remove IIFE
(function() {

    console.log('Starting MultiMath with an IIFE'); 
    */
    console.log('Starting with an RequireJS in WebPack');

    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function() {
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });

    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function() {
        game.calculateScore();
    });

    // set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount();

    //})();
});