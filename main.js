var game;
var player;

window.onload = function() {
	game = new Phaser.Game(500,500, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.start('Load');
}
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log('Load: preload');
		game.load.path = '../Woods/assets/img/';
		game.load.image('block', 'home.png');
	},
	create: function() {
		console.log('Load: create');
		game.state.start('Play');
	}
};
var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log('Play: preload');
	},
	create: function() {
		console.log('Play: create');

		player = game.add.group();
	    
		player  = new Player(game, 'block');
		game.add.existing(player);;
	   

	},
	update: function() {
		console.log('HIYA!');
	}
};


