
// You can write more code here

/* START OF COMPILED CODE */

import PlatformGroup from "../prefabs/PlatformGroup.js";
import P_Player2 from "../prefabs/P_Player2.js";
import P_Player from "../prefabs/P_Player.js";
import P_Platform from "../prefabs/P_Platform.js";
import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import LaunchSceneActionScript from "../scriptnodes/scene/LaunchSceneActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// leftKey2
		const leftKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// upKey2
		const upKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// rightKey2
		const rightKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// platformGroup
		const platformGroup = new PlatformGroup(this);
		this.add.existing(platformGroup);

		// player2
		const player2 = new P_Player2(this, 390, 749);
		this.add.existing(player2);

		// player1
		const player1 = new P_Player(this, 655, 669);
		this.add.existing(player1);

		// p_Platform
		const p_Platform = new P_Platform(this, 529, 597);
		this.add.existing(p_Platform);
		p_Platform.scaleX = 100;
		p_Platform.scaleY = 1;

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// launchSceneActionScript
		const launchSceneActionScript = new LaunchSceneActionScript(onAwakeActionScript);

		// collider
		this.physics.add.collider(player1, platformGroup.group);

		// collider_1
		this.physics.add.collider(player2, platformGroup.group);

		// collider_2
		this.physics.add.collider(player1, p_Platform);

		// collider_3
		this.physics.add.collider(player2, p_Platform);

		// launchSceneActionScript (prefab fields)
		launchSceneActionScript.sceneKey = "UI";

		this.platformGroup = platformGroup;
		this.player2 = player2;
		this.player1 = player1;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.leftKey2 = leftKey2;
		this.upKey2 = upKey2;
		this.rightKey2 = rightKey2;

		this.events.emit("scene-awake");
	}

	/** @type {PlatformGroup} */
	platformGroup;
	/** @type {P_Player2} */
	player2;
	/** @type {P_Player} */
	player1;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey2;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey2;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey2;

	/* START-USER-CODE */
	isGameOver = false;
	// Write more your code here
	yStart1;
	yStart2;

	create() 
	{
		this.editorCreate();

		const width = this.game.config.width;
		const height = this.game.config.height;

		this.player1.setPosition(width / 4, 7 * height / 8);
		this.player2.setPosition(3 * width / 4, 7 * height / 8);
		this.yStart1 = this.player1.y;
		this.yStart2 = this.player2.y;

	}

	update()
	{
		let score1 = Math.floor(-this.player1.y + this.yStart1);

		let score2 = Math.floor(-this.player2.y + this.yStart2);
		if(this.isGameOver)
		{
			return;
		}
		//player 1 input
		if(this.leftKey.isDown)
		{
			console.log("left");
			this.player1.move(-1);
		}
		else if(this.rightKey.isDown)
		{
			this.player1.move(1);
		}
		else
		{
			this.player1.move(0);
		}
		if(this.upKey.isDown)
		{
			this.player1.jump();
		}

		//player 2 input
		if(this.leftKey2.isDown)
		{
			this.player2.move(-1);
		}
		else if(this.rightKey2.isDown)
		{
			this.player2.move(1);
		}
		else
		{
			this.player2.move(0);
		}
		if(this.upKey2.isDown)
		{
			this.player2.jump();
		}

		let y = this.player1.y < this.player2.y ? this.player1.y : this.player2.y;
		//y -= this.game.config.height / 2 - 30;
		this.cameras.main.centerOnY(y);

		this.scene.get("UI").updateScore(1, score1 > 0 ? score1 : 0);
		this.scene.get("UI").updateScore(2, score2 > 0 ? score2 : 0);

		if (this.player1.y - y > this.game.config.height / 2) 
		{
			this.scene.get("UI").whoWon(2);
			this.isGameOver = true;
		}

		else if (this.player2.y - y > this.game.config.height / 2) 
		{
			this.scene.get("UI").whoWon(1);
			this.isGameOver = true;
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
