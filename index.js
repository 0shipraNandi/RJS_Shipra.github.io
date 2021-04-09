function text_in_loop(){
	var p = document.getElementById("text_content");
	for(i = 0; i < 4; i++){
		for (j = 0; j <= i; j++){
			p.innerHTML += "Hello ";
		}
		p.innerHTML +="<br>";
	}
}

function change_stat(){
	var st = document.getElementById("status");
	var rect = document.getElementById("rt");
	st.style.display = "block";
	st.innerHTML = "Button Clicked";
	rect.style.backgroundColor = "green";
}
