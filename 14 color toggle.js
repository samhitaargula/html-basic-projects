var b=document.getElementsByTagName("button");
var head=document.getElementsByTagName('h1');
var tail=document.getElementsByTagName('h2');
var para=document.getElementsByTagName('p');
var sayhi=document.getElementsByTagName("h3");
// var body=document.getElementsByTagName("body");
var iswhite= true;

b[0].addEventListener("click",first);

b[1].addEventListener("click",function(){
	sayhi[0].textContent= "Hi!"
});

function first(e){
	head[0].style.color= "purple";
	tail[0].style.color= "green";
	para[0].style.border= "2px solid red";
	// e.stopImmediatePropagation();
	// this.removeEventListener("click", first);
 //    document.onclick = second;
 	if (iswhite){
 		// body[0].style.background= "pink";
		document.body.style.background= "pink";
 		iswhite=false;
 	}
 	else{
		document.body.style.background= "white";
 		iswhite=true;
 	}
}

// function second(){
// 	document.body.style.background= "white";
// 	e.stopImmediatePropagation();
// 	this.removeEventListener("click", second);
//     document.onclick = first;
// }