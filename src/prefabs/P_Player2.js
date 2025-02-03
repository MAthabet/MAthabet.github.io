
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class P_Player2 extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player-idle-1.png");

		scene.physics.add.existing(this, false);
		this.body.checkCollision.up = false;
		this.body.setOffset(29, 23);
		this.body.setSize(21, 42, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	

	// Write your code here.
	update()
	{
		if(this.body.touching.down)
		{
				this.play("idle", true);
		}
	}
	jump()
	{
		if(!this.body.touching.down)
			{
				return;
			}
		this.play("jump");
		this.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + "jump", () => {
			console.log("jump complete");
			this.play("spin");
		});
		this.body.velocity.y = -400;
	}

	move(direction)
	{
		this.body.velocity.x =  direction*100;
		if(direction > 0)
		{
			this.flipX = false;
		}
		else if(direction < 0)
		{
			this.flipX = true;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
