
// You can write more code here

import P_Platform from "./P_Platform.js";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlatformGroup extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		

		/* START-USER-CTR-CODE */
		this.group = scene.add.group({
			classType: P_Platform
		})
		for(let i = 0; i < 18; i++)
		{
			let x = Phaser.Math.Between(30, scene.game.config.width/2);
			let x2 = Phaser.Math.Between(scene.game.config.width/2, scene.game.config.width-30);
			let y = scene.game.config.height - 64 * i - 32;
			let platform = this.group.get(x,y);
			let platform2 = this.group.get(x2 , y);
		}

		this.maxPlatformDistance = -scene.game.config.height +32 +(scene.game.config.height - 64 * 17 - 32);
		this.lastPlatformYPosition = scene.game.config.height - 64 * 17 - 32;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */	
	group;	
	maxPlatformDistance;
	lastPlatformYPosition;
	update() {
		const scrollY = this.scene.cameras.main.scrollY;
		const children = this.group.getChildren();
		const childrenToMove = [];
		this.bottomMostPlatformYPosition = children[0].y;

		children.forEach((child) => {
			if (child.y >= scrollY - this.maxPlatformDistance) {
				childrenToMove.push(child);
			}			
		});

		for(let i = 0; i < childrenToMove.length; i+=2)
			{
				let y = this.lastPlatformYPosition - 64 * Math.floor((i+2)/2);
				childrenToMove[i].y = y;
				childrenToMove[i].x = Phaser.Math.Between(30, this.scene.game.config.width/2);
				childrenToMove[i+1].y = y;
				childrenToMove[i+1].x = Phaser.Math.Between(this.scene.game.config.width/2, this.scene.game.config.width-30);
				this.lastPlatformYPosition = y;
			}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
}
