#pragma strict
private var squareSize: int= 2;

private var baseX:float;
private var baseY:float;
	
function Start () {
	gameObject.transform.position.x = 4  * squareSize;
	gameObject.transform.position.y = 3 * squareSize;
	gameObject.transform.position.z = 0;
}

function Update () {
	if(gameObject.transform.position.y < -5){
		gameObject.transform.position.y = 50;
	}
	if(gameObject.transform.position.y>54){
		gameObject.transform.position.y = -5;
	}
	if(gameObject.transform.position.x<0){
		gameObject.transform.position.x = 0;
	}
	if(gameObject.transform.position.x>62){
		gameObject.transform.position.x = 62;
	}
	//Debug.Log(gameObject.transform.position.x);
}

