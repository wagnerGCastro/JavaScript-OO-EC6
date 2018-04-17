'use sctrict';
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

// ===============================================================//
//    Example 1: Creating a new class (Declarando classes)		  //
// ===============================================================//
	class Retangle {
		constructor(altura, largura) {
		    this.altura = altura;
		    this.largura = largura;
	  	}
	}


// =============================================================== //
//	  Example 2:  Expressões de Classes 	   					   //
// =============================================================== //
	// Uma Expressão de Classe (class expression) é outra forma para definir classes. 
	// Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para 
	// uma expressão de classe é local ao corpo da classe.
	// sem nome
	var Retang = class {
	  	constructor(altura, largura) {
		    this.altura = altura; 
		    this.largura = largura;
	  	}
	}
	// nomeada
	var Triangulo = class Triangulo {
	  	constructor(altura, largura) { 
	    	this.altura = altura;
	    	this.largura = largura;
	  	}
	}
	// Nota: As expressões de classe tambem sofrem com o mesmo problema de hoisted 
	// mencionados em declarações de classe.


// =============================================================== //
// 	  Example 3: Corpo de uma classe e definições de métodos 	   //
// =============================================================== //
	class Retangulo {
	    constructor(altura, largura) {
	    	this.name = 'Retangulo';
	      	this.altura = altura; 
	      	this.largura = largura;
	    }
	    get area() {
	        return this.calculaArea()  
	    }  
	    calculaArea() {  
	        return this.altura * this.largura;  
	    }
	    setNewArea(h,w) {
	    	this.altura = h; 
	    	this.largura = w;
	    	//return this.calculaArea();
	    }
	    //Simple class instance methods using short-hand method
		verName(){
			return ('Eu sou  a classe ' +  this.name + '.');
			console.log('Eu sou  a classe ', this.name + '.');
		}
	}
	const quadrado = new Retangulo(10, 13.3);
	$( ".p1" ).append('<p><hr><h4>Example 3: Corpo de uma classe e definições de métodos </h4></p>');  
	$( ".p1" ).append('<p> <pre>'+ Retangulo.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p>' + quadrado.verName() + ' </p>'); 
	// getters
	$( ".p1" ).append('<p>' + quadrado.area + ' <span class=" glyphicon glyphicon-ok"></span> </p>');
	$( ".p1" ).append('<p>' + quadrado.calculaArea() + ' <span class=" glyphicon glyphicon-ok"></span> </p>');
	// setters
	$( ".p1" ).append('<p>' + quadrado.setNewArea(144,13) + ' => setando area');
	$( ".p1" ).append('<p>' + quadrado.calculaArea() + '  => setando area');
 

// =============================================================== //
// 	  Example 4: Métodos estáticos 	   							   //
// =============================================================== //
	class Ponto {
	    constructor(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	    static distancia(a, b) {
	        const dx = a.x - b.x;
	        const dy = a.y - b.y;
	        return Math.sqrt(dx*dx + dy*dy);
	    }
	}
	const p1 = new Ponto(5, 5);
	const p2 = new Ponto(10, 10);
	console.log(Ponto.distancia(p1, p2));
	$( ".p1" ).append('<p><hr><h4>Example 4: Métodos estáticos</h4></p>');  
	$( ".p1" ).append('<p> <pre>'+ Ponto.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p>' + JSON.stringify(p2).toString() + ' </p>');  // undefined
	$( ".p1" ).append('<p>' + Ponto.distancia(p1, p2) + ' </p>');  // undefined


// =============================================================== //
// 	  Example 5: Empacotando com protótipos e métodos estáticos    //
// =============================================================== //
	class Animal {
		falar() { return this ;}
		static comer() { return this ;}
	}

	let ani = new Animal();
	let comer = Animal.comer;
	$( ".p1" ).append('<p><hr><h4>Example 5: Empacotando com protótipos e métodos estáticos</h4></p>');  // Animal {}
	$( ".p1" ).append('<p><pre>'+ Animal.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 1- ' + JSON.stringify(ani.falar()).toString() + '</p>');  // Animal {}
	$( ".p1" ).append('<p> 2- ' + ani.falar.toString() + '  </p>');  // Animal {}
	$( ".p1" ).append('<p> 3- ' + JSON.stringify(Animal.comer()) + ' </p>');  // undefined
	$( ".p1" ).append('<p> 4- ' + JSON.stringify(comer()) + ' </p>');  // undefined

	//Se escrevemos o código acima usando classes baseadas em função tradicional, então o 
	//autoboxing acontecerá com base no valor de "this" para o qual a função foi chamada.
	var Animal2 = function() {}
	Animal2.prototype.falar = function() { return this;}
	Animal2.comer = function() { return this;}

	let objAni1 = new Animal2();
	let falar1  =  objAni1.falar;
	let comer1   = Animal2.comer;
	$( ".p1" ).append('<p> 5- ' + JSON.stringify(objAni1) + ' </p>');  // {}
	$( ".p1" ).append('<p> 6- ' + objAni1.falar1 + ' </p>');  // undefined
	$( ".p1" ).append('<p> 7- ' + JSON.stringify(falar1) + ' </p>');   // undefined
	$( ".p1" ).append('<p> 8- ' + comer1() + ' </p>');   //objeto global


// =============================================================== //
// 	Example 6: Sub classes com o extends  //
// =============================================================== //
	// A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de 
	// classe para criar uma classe como filha de uma outra classe.
	class Animal3 {
		constructor(nome){ this.nome = nome; }
		falar() { return (this.nome +'emite emite uma barulho'); }
	}
	class Cachorro1 extends Animal3 {
		falar() { return (this.nome +' latidos') ;}
	}
	var d1 = new Cachorro1('Mat');
	// important: Se existir um contrutor nas subclasses, é necessário primeiro 
	// chamar super() antes de usar a keyword "this".
	$( ".p1" ).append('<p><hr><h4>Example 6: Sub classes com o extends</h4></p>'); 
	$( ".p1" ).append('<p><pre>'+ Animal3.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 1- '+ d1.falar() +'</pre></p>'); 


	// Também é possivel ampliar (extends) "classes" baseadas em funções tradicionais.
	function Animal_A (nome) {
	  this.nome = nome;
	}
	Animal_A.prototype.falar_a = function() {
	   return (this.nome + ' faça barulho.');
	}
	class Cachorro_A extends Animal_A { 
	  	falar_b() {
	   		return (this.nome + ' emite um barulho.');
	  	}
	}
	var d2 = new Cachorro_A('Mitzie');
	//d2.falar_a(); // Mitzie barks
	$( ".p1" ).append('<p><pre>'+Animal_A.toString() +'<br>'+Cachorro_A.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 0- '+ d2.falar_a() +'</pre></p>'); 
	$( ".p1" ).append('<p> 1- '+ d2.falar_b() +'</pre></p>');

	// Note que classes não extendem objetos normais (não construíveis). Se você quer herdar 
	// de um objeto, é necessário utilizar Object.setPrototypeOf():
	var Animal_B = {
		 falar_b() { return (this.nome + ' faça barulho'); },
		correr_b() { return (this.nome + ' correu'); }
	}
	/*
	class Cachorro_B extends Animal_B {
		constructor(nome){
			this.nome = nome;
		}
	} 
	*/ // Erro!: class Cachorro_B não pode extender de um Objeto desta maneira
	class Cachorro_B {
		constructor(nome){
			this.nome = nome;
		}
		 falar_bb() { return (this.nome + ' latiu'); }
	}
	// ***important Correto: class Cachorro_B extends Animal_B 
	Object.setPrototypeOf(Cachorro_B.prototype, Animal_B);
	var dog_b = new Cachorro_B('Bob');
	$( ".p1" ).append('<p> 2- '+ dog_b.falar_b() +'</pre></p>'); 
	$( ".p1" ).append('<p> 3- '+ dog_b.falar_bb() +'</pre></p>'); 
	$( ".p1" ).append('<p> 4- '+ dog_b.correr_b() +'</pre></p>'); 



// =============================================================== //
// 	Example 7: Species											   //
// =============================================================== //
	// O padrão Species permite a sobrescrita do construtor padrão.	
	// Por exemplo, quando utilizando um método como map() que retorna o construtor padrão, 
	// você pode querer que esse método retorne um objeto Array ao invés do objeto MinhaArray
	// O Symbol.species te permite fazer isso:

	class Array1 {
		constructor(array){
			this.array = array;
		}
		get getArray(){
			//console.log( this.array );
			return this.array;
		}
	}

	class MyArray2 extends Array1 {
		// [Symbol.species] alterar o constructor
		static get [Symbol.species]() { return 2*4 ;}
	}

	const arr1 = new Array1([34, 66, {nome: 'wagner', idade: 35}]);
	const arr2 = new MyArray2([23,2,45]);
	const arr3 = arr2.getArray.map( function(x){  return x * 2; } );
	

	$( ".p1" ).append('<p><hr><h4>Example 7: Species</h4></p>'); 
	$( ".p1" ).append('<p><pre>'+ Array1.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p><pre>'+ MyArray2.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 1- '+ JSON.stringify(arr1.getArray) +'</pre></p>'); 
	$( ".p1" ).append('<p> 2- '+ JSON.stringify(arr2.getArray) +'</pre></p>'); 
	$( ".p1" ).append('<p> 3- '+ JSON.stringify(arr3) +'</pre></p>'); 
	$( ".p1" ).append('<p> 4- '+ JSON.stringify(arr2) +'</pre></p>'); 
	
	console.log(arr2 instanceof Array1); // true
	console.log(arr2 instanceof MyArray2); // false



// =============================================================== //
// 	Example 8: Chamada da classe pai com super					   //
// =============================================================== //
	// A palavra-chave (keyword) super é utilizada para chamar funções que pertencem
	// ao pai do objeto.
	class Gato1 {
		constructor(nome){
			this.nome = nome;
		}
		falar() {
			return (this.nome + ' faça barulho');
		}
	}
	class Leao1 extends Gato1 {
		falar() {
			console.log( this.nome + ' solta rugidos' );
			return super.falar();
			
		}
	}
	var l1 = new Leao1('Rei Leão');
	$( ".p1" ).append('<p><hr><h4>Example 8: Chamada da classe pai com Super</h4></p>'); 
	$( ".p1" ).append('<p><pre>'+ Gato1.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p><pre>'+ Leao1.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 1- '+ l1.falar() +'</pre></p>');  // faça barulho
	
	
// =============================================================== //
// 	Example 9: Subclasses abstratas ou mix-ins				   	   //
// =============================================================== //
	// Subclasses abstratas ou mix-ins são templates para classes. Uma classe do 
	// ECMAScript pode apenas ter uma classe pai, assim sendo, não é possível a 
	// classe ter herança múltipla.

	// Para se ter um comportamento similar ao de herança múltipla no ECMAScript 
	// usa-se mix-ins, uma forma de implementar mix-ins é usar um template de subclasse 
	// que é uma função que instancia uma classe base e retorna uma subclasse extendida 
	// desta classe base:
	class Humano {
	  	constructor(nome) { 
	    	this.nome = nome;
	 	}
	  	andar() { 
	    	return this.nome+' andou um passo';
	  	}
	}
	const HumanoFalante = Base => class extends Base {
	  	falar() { 
	    	return this.nome + ' diz: olá mundo!';
	  	}
	}
	const HumanoFeliz = Base => class extends Base {
	  	feliz() { 
	    	return this.nome + ' Estou feliz!';
	  	}
	}

	// função para se ter herança multipla
	const HumanoFalanteMixado = Base => class extends Base {};
	//
	const HumanoFinal = HumanoFalanteMixado( HumanoFeliz(HumanoFalante(Humano)) );
	const humano = new HumanoFinal('Bill Gates')

	$( ".p1" ).append('<p><hr><h4>Example 9: Subclasses abstratas ou mix-ins </h4></p>'); 
	$( ".p1" ).append('<p><pre>'+ Humano.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p><pre>'+ HumanoFalante.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p><pre>'+ HumanoFeliz.toString()+'</pre></p>'); 
	$( ".p1" ).append('<p> 1- '+ humano.andar() +'</pre></p>');  
	$( ".p1" ).append('<p> 2- '+ humano.falar() +'</pre></p>');  
	$( ".p1" ).append('<p> 3- '+ humano.feliz() +'</pre></p>');  

	console.log(humano.andar());
	console.log(humano.falar());
	console.log(humano.feliz());


$(document).ready(function () {
   // alert("slide_Jquery");
    $( "#tabs" ).tabs();

    // 1 Estanciando Cclass Poligon
   //  $( ".p1" ).append('<p>' + inst.getPolyName() + ' <span class=" glyphicon glyphicon-ok"></span> </p>');
    //poligono.verName();
});






