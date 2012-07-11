#pragma strict

/*

11111111111111111111111111111111 1 
11000000000000000000000000000011 2
11000000000000000000000000000011 3
11000000000000000000000000000011 4
11000000000001111110000000000011 5
11000000000000000000000000000011 6
11000000000000000000000000000011 7
11000000000000000000000000000011 8
11000000000000000000000000000011 9
11000000001111100111110000000011 0
11000000000000000000000000000011 1
11000000000000000000000000000011 2
11000000000000000000000000000011 3
11000000000000000000000000000011 4
11000001111111111111111110000011 5
11000000000000000000000000000011 6
11000000000000000000000000000011 7
11000000000000000000000000000011 8
11000000000000000000000000000011 9
11001111111001111110011111110011 0
11000000000000000000000000000011 1
11000000000000000000000000000011 2
11000000000000000000000000000011 3
11000000000000000000000000000011 4
11111111111111111111111111111111 5

12345678901234567890123456789012

4 + 4 + 7 + 7 + 6 + 4

18+14
32

*/


private var scene1 = '11111111111111111111111111111111\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000001111110000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000001111100111110000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000001111111111111111110000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11001111111001111110011111110011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11000000000000000000000000000011\n11111111111111111111111111111111\n';
private var squareSize: int= 2;

private var baseX:float;
private var baseY:float;
var tile:UnityEngine.Texture;	
	

function Start () {
	tile = Resources.Load("BBTile_Rocky");
	baseX = gameObject.transform.position.x;
	baseY = gameObject.transform.position.y;

	var column:int = 0;
	var row:int = 24;
	
	for(i in scene1){
		//Debug.Log(i);
		if(i=="0"||i=="1"){
			if(i=="1"){
				//Debug.Log("AddWall");
				addWall(column, row);
			}
			column++;
		} else {
			column=0;
			row--;
		}
	}
}

function addWall(column:int, row:int){
	var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube.renderer.material.mainTexture= tile;
	cube.transform.localScale.x = squareSize;
	cube.transform.localScale.y = squareSize;
	cube.transform.localScale.z = squareSize;
	cube.transform.position.x = squareSize * column;
	cube.transform.position.y = squareSize * row;
	cube.transform.position.z = 0;
	cube.transform.parent = gameObject.transform;
	Debug.Log(column+" "+row);
}

function Update () {
	
}