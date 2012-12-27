#pragma strict

//var angle: float;
var lightParticle: GameObject;
var bubbleSoundEffect: AudioClip;
//var particle : Particle;
private var counter: int;
private var emitInterval: int;
//private var particles : Array;


function Start () {
	emitInterval = 20;
	counter = 0;
	//particles = new Array();
}

function Update () {
	counter++;
	if(counter > emitInterval){
		if(Input.GetKeyDown(KeyCode.E)){
			counter = 0;
			EmitParticle();
		}
	}
}

function EmitParticle(){
		if(bubbleSoundEffect){
			AudioSource.PlayClipAtPoint(bubbleSoundEffect, Vector3 (26, 24, -177));
		}
		var particleObj:GameObject = Instantiate(lightParticle, Vector3(transform.position.x, transform.position.y+1, transform.position.z), transform.rotation);
		particleObj.rigidbody.AddForce(100,0, 0);
		
		//var particle = new LightParticle();
		//particle.particleObj = particleObj;
		//particle.angle = angle;
		//particles.push(particleObj);
}

/**
class Particle{
	var speed: float;
	var angle: float;
	var particleObj : GameObject;
	
	function Start(){
		
	}
	
	function Update(){
		
	}

}**/