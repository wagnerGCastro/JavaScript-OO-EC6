'use sctrict';

// ===============================================================//
//      Example 1: Creating a new class (declaration-form)		  //
// ===============================================================//

	class Poligon {

		// constructor
		construct (height, width, name){
			this.name   = name;
			this.height = height;
			this.width  = width;
		}

		//Simple class instance methods using short-hand method
		verName(){
			console.log('Hi, I am a ' + this.height + '.');
			return ('Hi, I am a ' +  this.name + '.');
		}

		//Simple class instance methods using short-hand method
		verHistory(){
			//ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
			console.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
			return ('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
		}

		// We will look at static and subclassed methods shortly
	}


// =============================================================== //
//		Example 2: Creating a new class (expression-form)		   //
// =============================================================== //
	//As classes ES6 também suportam expressões de classe - apenas de outra maneira
	const MyPoly = class Poly {

		getPolyName() {
			return ('Hi. I was created with a Class expression. My name is ' + Poly.name)
		}
	}


// =============================================================== //
// 		Example 3: Extending an existing classe 				   //
// =============================================================== //
	class Square extends Poligon{
		constructor(length) {
			super(length, length);
			this.name = 'Square';
		}

		get area() {
		    return this.height * this.width;
		}
		set area(value) {
		    this.area = value;
		}
	}





$(document).ready(function () {
   // alert("slide_Jquery");
    $( "#tabs" ).tabs();

    // 1 Estanciando Cclass Poligon
    let poligono = new Poligon(300, 400);
     $( ".p1" ).append('<p>' + poligono.verName() + '</p>');
     $( ".p1" ).append('<p>' + poligono.verHistory() + '</p>');
    //poligono.verName();

    // 2 Estanciando Cclass MyPoly
    let inst = new MyPoly();
    $( ".p1" ).append('<p>' + inst.getPolyName() + ' <span class=" glyphicon glyphicon-ok"></span> </p>');

    // 2 Estanciando Cclass MyPoly
    let square = new Square(5);
    $( ".p1" ).append('<p>' + square.verName() + ' <span class=" glyphicon glyphicon-ok"></span> </p>');
    $( ".p1" ).append('<p> A área do triângulo é ' + square.area() + ' <span class=" glyphicon glyphicon-ok"></span> </p>');

});


var sepExpressoes =  function () {
}



