#pragma strict
private var gameState = 0;
var mainMenuObj:GameObject;

function Start () {
	initializeGame();
	Debug.Log("init");
}

function Update () {
	switch(gameState){
		case 0:
			//GameStart
			break;
		case 1:
			//Level In progress
			break;
		case 2:
			//Level change
			break;
		case 3:
			//GameOver
			break;
		default:
			break;
	}
}

function initializeGame(){
	var mainMenu:GameObject = Instantiate(mainMenuObj, transform.position, transform.rotation);
	//mainMenu.MainMenu.callBackFunction = menuCallback;
}

function menuCallback(response:String){

}

class player{
	private var alive:boolean;
	private var lives:int;
}