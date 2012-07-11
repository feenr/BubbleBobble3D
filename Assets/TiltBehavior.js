#pragma strict

function Start () {
	/*var components:Array = gameObject.GetComponents(GameObject);
	for(var i = 0; i < components.length; i++){
		if(components[i].renderer){
			components[i].renderer.material.color = Color.red;
		}
		}*/
	}
	
	function Update () {
		var x = gameObject.transform.position.x;
		//Debug.Log(x);
		//transform.Translate(0,0,Time.deltaTime);
		//Transform.Rotate();
		//transform.Rotate(Vector3.right * Time.deltaTime);
		
		if(Input.GetKey(KeyCode.LeftArrow)==true){
			transform.Rotate(2*Vector3.up * Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.RightArrow)==true){
			transform.Rotate(-2*Vector3.up * Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.DownArrow)==true){
			transform.Rotate(2*Vector3.right * Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.UpArrow)==true){
			transform.Rotate(-2*Vector3.right * Time.deltaTime);
		}
	}