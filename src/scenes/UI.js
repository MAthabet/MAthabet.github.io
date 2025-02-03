
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UI extends Phaser.Scene {

	constructor() {
		super("UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// score1
		const score1 = this.add.text(916, 24, "", {});
		score1.scaleX = 5;
		score1.scaleY = 5;
		score1.text = "0\n";
		score1.setStyle({  });

		// score
		const score = this.add.text(263, 24, "", {});
		score.scaleX = 5;
		score.scaleY = 5;
		score.text = "0\n";
		score.setStyle({  });

		// gameover
		const gameover = this.add.text(85, 250, "", {});
		gameover.visible = false;
		gameover.text = "You Won\n";
		gameover.setStyle({ "fontSize": "90px" });

		// gameover1
		const gameover1 = this.add.text(697, 250, "", {});
		gameover1.visible = false;
		gameover1.text = "You Lost\n";
		gameover1.setStyle({ "fontSize": "90px" });

		this.score1 = score1;
		this.score = score;
		this.gameover = gameover;
		this.gameover1 = gameover1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	score1;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.GameObjects.Text} */
	gameover;
	/** @type {Phaser.GameObjects.Text} */
	gameover1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}
	updateScore(target,text) 
	{
		if (target === 1) 
		{
			this.score.text = text;
		}
		else 
		{
			this.score1.text  = text;
		}
	}
	whoWon(target) 
	{
		if (target === 1) 
			{
	
				this.gameover.text = "You Won";
				this.gameover.setColor("#00ff00");
				this.gameover1.text = "You Lost";
				this.gameover1.setColor("#ff0000");
			}
			else 
			{
				this.gameover1.text = "You Won";
				this.gameover1.setColor("#00ff00");
				this.gameover.text = "You Lost";
				this.gameover.setColor("#ff0000");
			}
		this.gameover.visible = true;
			this.gameover1.visible = true;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
