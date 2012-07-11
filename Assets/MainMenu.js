#pragma strict

var callBackFunction;
private var currentLevel:GameObject;
private var currentTile:Texture;
var level1Texture:Texture;
var level2Texture:Texture;
var level3Texture:Texture;
function Start () {
	changeLevel(1);
}

function Update () {
}

function OnGUI () {
	GUI.Label (Rect (20, 30, 200, 30), "Bubble Bobble 3D");
	GUI.Label (Rect (20, 60, 200, 30), "      Controls");
	GUI.Label (Rect (20, 75, 200, 30), "Movements: WASD or Arrows");
	GUI.Label (Rect (20, 90, 200, 30), "Jump: Space");
	GUI.Label (Rect (20, 105, 200, 30), "Blow Bubble: E");
	
	
	if (GUI.Button (Rect (20,150,150,50), "Level 1")) {
		changeLevel(1);
	}
	if (GUI.Button (Rect (20,210,150,50), "Level 2")) {
		changeLevel(2);
	}
	if (GUI.Button (Rect (20,270,150,50), "Level 3")) {
		changeLevel(3);
	}
	
}


function changeLevel(levelSelected:int){
	//var objects = GameObject.FindGameObjectsWithTag( "Level" );
	//if(objects){
	//	for(var go in objects ){
	//		Destroy(go);
	//	}	
	//}
	if(currentLevel){
		Destroy(currentLevel);
	}
	var levelId:String = "";
	switch(levelSelected){
		case 1:
			levelId = "Level1";
			currentTile = level1Texture;
			break;
		case 2:
			levelId = "Level2";
			currentTile = level2Texture;
			break;
		case 3:
			levelId = "Level3";
			currentTile = level3Texture;
			break;
		default:
			break;
	}
	var level:GameObject = new GameObject( "Level" );
	level.AddComponent(levelId);
	//level.GetComponents()[0].Tile=currentTile;
	currentLevel = level;
}