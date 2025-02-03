
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

		this.maxPlatformDistance = scene.scale.height *2;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */	
	group;	
	maxPlatformDistance;
	
	update() {
		const scrollY = this.scene.cameras.main.scrollY;
		const children = this.group.getChildren();
		const childrenToMove = [];
		this.bottomMostPlatformYPosition = children[0].y;

		children.forEach((child) => {
			if (child.y >= scrollY + this.maxPlatformDistance) {
				childrenToMove.push(child);
			}
		});

		let childrenToMoveYOffset = 0;
		childrenToMove.forEach((child) => {

			child.x = Phaser.Math.Between(10, 200);
			childrenToMoveYOffset += Phaser.Math.Between(10, 40);
			child.y = scrollY - childrenToMoveYOffset;

			const index = children.indexOf(child);
			if (index % 2 === 0) {
				child.x = Phaser.Math.Between(0, this.scene.game.config.width / 2);
			} else {
				child.x = Phaser.Math.Between(this.scene.game.config.width / 2, this.scene.game.config.width);
			}

		});
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
}
