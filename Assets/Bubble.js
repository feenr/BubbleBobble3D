#pragma strict

var speed: float;
var angle: float;
//var particleObj : GameObject;
private var lifeSpan = 10;
private var currentLife:float = 0;
private var maxSize:int;
private var currentSize:float;
private var expansionSpeed;
private var containsEnemy = false;

function Start(){
	rigidbody.AddForce (0,120, 0);
	//Time.time;
	maxSize = transform.localScale.x;
	transform.localScale.x = maxSize * .1;
	transform.localScale.y = maxSize * .1;
	transform.localScale.z = maxSize * .1;
}

function Update(){

	rigidbody.AddForce(0,1000*Time.deltaTime, 0);
	
	currentLife += Time.deltaTime;
	if(containsEnemy){//Jump to full size
		transform.localScale.x = maxSize;
		transform.localScale.y = maxSize;
		transform.localScale.z = maxSize;
	}else {
		if (currentLife < 1) {//Increase to full size over 2 seconds
			var scaleIncrease = maxSize *.9*Time.deltaTime;
			transform.localScale.x = transform.localScale.x+scaleIncrease;
			transform.localScale.y = transform.localScale.y+scaleIncrease;
			transform.localScale.z = transform.localScale.z+scaleIncrease;
		}
	}
	if (currentLife > lifeSpan){
		Destroy(gameObject);
	}
	if(gameObject.transform.position.y < -5){
		gameObject.transform.position.y = 50;
	}
	if(gameObject.transform.position.y>54){
		gameObject.transform.position.y = -5;
	}

}


@script RequireComponent(Rigidbody)