function onReady(){
    console.log('Hello Chapter 5');

    var me = $('#me');
    var offsetWidth = -(me.width()/2 );
    var offsetHeight = -(me.height()/2);
    var context = document.getElementById('myCanvas').getContext('2d');
    	context.strokeStyle = '#aaaaaa';
    	context.moveTo(100,10);
    	context.lineTo(500,100);
    	context.lineTo(700,290);
    	context.lineTo(700,10);
    	
    	context.stroke();

    	context.strokeStyle = '#ff0000';
		context.beginPath();
		context.moveTo(100,10);
		//context.quadraticCurveTo(250,200,700,10);
		context.bezierCurveTo(500,100,700,290,700,10);
		context.bezierCurveTo(500,100,700,290,100,10);

		context.closePath();
		context.stroke();

		
		





    TweenLite.set(me, {css:{left:100+offsetWidth,top:150+offsetHeight}});
    /*TweenLite.to(me,3, {css:{left:700+offsetWidth,top:300+offsetHeight}});
    TweenLite.to(me,3, {css:{left:700+offsetWidth,top:10+offsetHeight},delay:3});*/

   /* TweenLite.to(me,3, {bezier:[
    	{left:700+offsetWidth,top:300+offsetHeight},
    	{left:700+offsetWidth,top:10+offsetHeight}
    	]});*/

	/*TweenLite.to(me,3, {bezier:{type:"quadratic",values:[
    	{left:150+offsetWidth,top:10+offsetHeight},
    	{left:250+offsetWidth,top:200+offsetHeight},
    	{left:700+offsetWidth,top:10+offsetHeight},
    	{left:250+offsetWidth,top:200+offsetHeight},
    	{left:150+offsetWidth,top:10+offsetHeight}
    	]}});*/

	TweenLite.to(me,3, {bezier:{type:"cubic",values:[
    	{left:100+offsetWidth,top:10+offsetHeight},
    	{left:500+offsetWidth,top:100+offsetHeight},
    	{left:700+offsetWidth,top:290+offsetHeight},
    	{left:700+offsetWidth,top:10+offsetHeight},
    	{left:500+offsetWidth,top:100+offsetHeight},
    	{left:700+offsetWidth,top:290+offsetHeight},
    	{left:100+offsetWidth,top:10+offsetHeight}
    	],
    	autoRotate:['left','top','rotation',60*Math.PI/180,true]

    }});


    /*var obj = {x:100, y:150, r:4,color:'#aaaaaa'};

    TweenLite.to(obj,6,{x:700,y:200,r:40, colorProps:{color:'#0F8FF5'},

    	onUpdate:onUpdateCanvas,onUpdateParams:["{self}",context,obj]})*/
    
}

function onUpdateCanvas(t,context,obj){
	var x = parseInt(obj.x);
	var y = parseInt(obj.y);
	var r = parseInt(obj.r);

	context.strokeStyle = obj.color;
	context.beginPath();
	context.arc(x,y,r,0,Math.PI*2,true);
	context.closePath();

	context.stroke();
}



$(document).ready(onReady);