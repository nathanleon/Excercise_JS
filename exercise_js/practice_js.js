/**********E1**********/
/*
Una función redundante

Escriba una función "redundant" que tome una cadena 'str' y devuelva una función que devuelva 'str'.

Ejemplos
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""

Notas
Su función debe devolver una función , no una cadena.

Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

function iniciar() {
  var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    alert(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();  

La función iniciar()  crea una variable local llamada nombre y una función interna llamada mostrarNombre(). Por ser una función interna, esta última solo está disponible dentro del cuerpo de iniciar(). Notemos a su vez que mostrarNombre() no tiene ninguna variable propia; pero, dado que las funciones internas tienen acceso a las variables de las funciones externas, mostrarNombre() puede acceder a la variable nombre declarada en la función iniciar().

Ejecuta el código usando este enlace de JSFiddle y observa que la sentencia alert(), dentro de mostrarNombre(), muestra con éxito el valor de la variable nombre, la cual fue declarada en la función externa. 

*/

function redundant(str) {
  return function(){
        return str
  }
}



/****************************E2**********************************/
/*
Todo sobre las funciones anónimas: agregar sufijos
Escriba una función que devuelva una función anónima , que transforma su entrada agregando una particular suffix al final.

Examples:
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"

test:
add_ly = add_suffix("ly") 
add_less = add_suffix("less") 
add_ing = add_suffix("ing") 

Comprueba si son iguales = assertEquals
Test.assertEquals(add_ly("hopeless"), "hopelessly")
Test.assertEquals(add_ly("total"), "totally")

Test.assertEquals(add_less("fear"), "fearless")
Test.assertEquals(add_less("ruth"), "ruthless")

Test.assertEquals(add_ing("cheer"), "cheering")
Test.assertEquals(add_ing("book"), "booking")
*/

function add_suffix(suffix) {
	return function(word){
    return word + suffix
  }
}

/******************E3**********************/
/*
Promises I: What Is a Closure?

Closures are functions that remember their lexical environments. Entornos léxicos significa: el entorno en el que se declaró la función.

function parent(x) {
  return function closure() {    // Closure is declared here.
    return x
  }
}

const remember = parent("remembers me")
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure()
// Returns "remembers me" because the inner
// function remembers x.

Arregle la función greetingMaker() para que funcione con la función greeting().
La función greeting() ya se ha creado (consulte la pestaña Pruebas ).

Ejemplo:
const greeting = greetingMaker("Hello")
greeting("James") ➞ "Hello, James"
Notas
Consulte la pestaña Recursos para obtener más información sobre cierres.

Test:
const greeting = greetingMaker("Hello")

Test.assertEquals(greeting("James"), "Hello, James")
Test.assertEquals(greeting("John"), "Hello, John")
Test.assertEquals(greeting("Jacob"), "Hello, Jacob")
Test.assertEquals(greeting("Joseph"), "Hello, Joseph")
*/


function greetingMaker(salutation) {
  return function greeting(name) {
    return `${salutation}, ${name}` 	
  }
}



/*****************E4****************/
/*
Repare el código: Desmutar una matriz
Tu amigo está intentando escribir una función para lograr las siguientes transformaciones:
let x = [3, 3, 3, 3, 3, 3, 3]

// Cada vez que se llama a x, se muestran los siguientes resultados:

change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]

Nota: La función change() no debe mutar la matriz original. Después de cada llamada a la función, el original x debería ser igual [3, 3, 3, 3, 3, 3, 3].

Se le ocurre el siguiente código:
function change(x, times) {
  for(let i = 0; i < x.length; i++) {
    let j = 1; 
    while (j <= times) {
      if (i >= j && i < x.length-j) {
        x[i]--; 
      }
      j++; 
    }
  }
  return x; 
}

¡Uy! El código parece mutar la matriz original. Arregle este código incorrecto para que la función ya no mute la matriz original .

Ejemplos:
let x = [3, 3, 3, 3, 3, 3, 3]

// What we want:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

// What we get:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]  // Good so far...

change(x, 2) => [3, 1, -1, -1, -1, 1, 3] // Array is mutated :(

Notas
Si esto es confuso, copie y pegue el código incorrecto en un entorno REPL y juegue con el código para comprender qué está haciendo la función.
Sugerencia: intente hacer una copia de la matriz de entrada.
Si esto le resulta familiar, es parte de una solución para el problema de la alfombra concéntrica .
 */

 // As it stands, only 1/4 tests pass
// Fix the code so that all tests pass
function change(x, times) {
  // [...x] crea una instancia del arreglo original
    let a = [...x]
  for (let i = 0; i < a.length; i++) {
		let j = 1; 
		while (j <= times) {
			if (i >= j && i < a.length - j) {
				a[i]--; 
			}
			j++; 
		}
	}
	return a 
}

let x = [3, 3, 3, 3, 3, 3, 3]

/***************************E5*************************/
/*
Metaprogramación: Hacer un caso de prueba
Se le dan dos valores a y b de tipo idéntico: números, cadenas o matrices. 
El resultado será:

la suma de a y b si los parametros son numbers.
    a = 1 | b = 1 ➞ Result = 2
La unión en una sola cadena de a y b si los parámetros son de cadenas.
    a = "1" | b = "1" ➞ Result = "11"
La concatenación de los valores de a y b en una sola matriz si los parámetros son matrices.
    a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]

En cualquier caso, no tiene que devolver simplemente el resultado. ¡Este desafío será un poco diferente al habitual porque su función devolverá el mismo caso de prueba que verifica la corrección de su función!

Cuando intenta resolver un desafío, su función pasa a una función Prueba, que acepta tres parámetros: su función con sus parámetros relacionados, el resultado esperado y un comentario opcional (no utilizado en este ejercicio).

Hay dos tipos diferentes para una función de prueba:
    Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)

Esto se usa cuando el tipo de valor del resultado esperado es primitivo (números, cadenas, valores booleanos o especiales como undefined, nully NaN).
    Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)

Esto se usa cuando el tipo de valor del resultado esperado es un objeto (matrices o literales de objeto).

Debe devolver una cadena que contenga la función Prueba que verifica la exactitud del resultado que obtuvo. Vea los ejemplos a continuación para una mejor explicación.

Examples:
    createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
    // Parameters are numbers, so result will be their sum: Test function verifies equality.

    createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")'
    // Parameters are strings, so result will be their join: Test function verifies equality.

    createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
    // Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity.

    Notas:
    Cuando los parámetros, resultados o valores dentro de las matrices son cadenas, necesitan las comillas dobles a su "alrededor en la cadena devuelta.
    ¡Mira la pestaña Pruebas si necesitas ayuda!

    Test.assertEquals(createTest("a", "b"), 'Test.assertEquals(createTest("a", "b"), "ab")')
    Test.assertEquals(createTest("Te", "st"), 'Test.assertEquals(createTest("Te", "st"), "Test")')
    Test.assertEquals(createTest("1", "1"), 'Test.assertEquals(createTest("1", "1"), "11")')
    Test.assertEquals(createTest(1, 1), 'Test.assertEquals(createTest(1, 1), 2)')
    Test.assertEquals(createTest(99, 1), 'Test.assertEquals(createTest(99, 1), 100)')
    Test.assertEquals(createTest(0, 0), 'Test.assertEquals(createTest(0, 0), 0)')
    Test.assertEquals(createTest([1], [1]), 'Test.assertSimilar(createTest([1], [1]), [1, 1])')
    Test.assertEquals(createTest(["1"], ["1"]), 'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])')
    Test.assertEquals(createTest(["String"], ["String"]), 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])')
*/

function createTest(a, b) {
    //compruebo el tipo de dato
  if (typeof a === "number") {
    //template literals (Plantillas de texto =``)
    return `Test.assertEquals(createTest(${a}, ${b}), ${a + b})`;
    //typeof muestra el tipo de dato
  } else if (typeof a === "string") {
    return `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`;
    //Array.isArray devuelve true o false si es un arreglo y typeof el tipo
  } else if (Array.isArray(a) && typeof a[0] === 'number') {
    return `Test.assertSimilar(createTest([${a}], [${b}]), [${a}, ${b}])`;
  } else {
    return `Test.assertSimilar(createTest(["${a}"], ["${b}"]), ["${a}", "${b}"])`;
  }
}

/*******************************E6*************************************/

/*
Funciones anidadas y cierres
Puede anidar una función dentro de una función. La función anidada (inner) es privada a la función que la contiene (outer). También con la forma: aclosure.

Un cierre es una expresión (normalmente una función) que puede tener variables libres junto con un entorno que enlaza esas variables (que "cierra" la expresión).
Dado que una función anidada es un cierre, esto significa que una función anidada puede "heredar" los argumentos y las variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.
Desde que la función anidada es un cierre (closure), esto significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene un scope (alcance) de la función externa.

Para resumir:

La función interna se puede acceder sólo a partir de sentencias en la función externa.
La función interna forma un cierre: la función interna puede utilizar los argumentos y las variables de la función externa, mientras que la función externa no puede utilizar los argumentos y las variables de la función interna.
El ejemplo siguiente muestra funciones anidadas:

function addCuadrado(a,b) {
   function cuadrado(x) {
      return x * x;
   }
   return cuadrado(a) + cuadrado(b);
}
a = addCuadrado(2,3); // retorna 13
b = addCuadrado(3,4); // retorna 25
c = addCuadrado(4,5); // retorna 41

Cree una función que tome tres colecciones de argumentos y devuelva el producto de números.
Examples:
    product(1,2)(1,1)(2,3) ➞ 8
    // 1 * 1 * 2 + 2 * 1 * 3

    product(10,2)(5,0)(2,3) ➞ 100
    // 10 * 5 * 2 + 2 * 0 * 3

    product(1,2)(2,3)(3,4) ➞ 30
    // 1 * 2 * 3 + 2 * 3 * 4

    product(1,2)(0,3)(3,0) ➞ 0
    // 1 * 0 * 3 + 2 * 3 * 0
Es decir tomar el primer valor de cada coleccion de argumentos multiplicarlos para luego sumarlos con los segundos valores de los argumento 
Notes
Toda entrada de prueba es válida..

Test:
    Test.assertEquals(product(1,2)(1,1)(2,3), 8)
    Test.assertEquals(product(10,2)(5,0)(2,3), 100)
    Test.assertEquals(product(1,2)(2,3)(3,4), 30)
    Test.assertEquals(product(1,2)(0,3)(3,0), 0)
*/

function product(a,b) {
	return function(c,d){
		return function(e,f){
			return a * c * e + b * d * f;
		}
	}
}


/*******************************E7**********************************/
/*
Purge and Organize

Dada una matriz de números, escriba una función que devuelva una matriz que ...

Tiene todos los elementos duplicados eliminados.
Se ordena de menor a mayor valor.

Ejemplos:
    uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

    uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

    uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]


    El Array.from()método estático crea una nueva Arrayinstancia, copiada superficialmente a partir de un objeto de tipo matriz o iterable.
    El constructor Set le permite crear objetos Set que almacenan valores únicos de cualquier tipo, ya sean valores primitivos o referencias de objetos.
    El sort()método ordena los elementos de una matriz en su lugar y devuelve la matriz ordenada.
*/

function uniqueSort(arr) {
    return Array.from(new Set(arr)).sort((a,b) => a - b);
  }


  function uniqueSort(arr) {
	return [...new Set(arr)].sort((a,b)=> a-b)
}



/************************************************************************/

/*
Invierta el orden de las palabras con cinco letras o más:
Escriba una función que tome una cadena de una o más palabras como argumento y devuelva la misma cadena, pero con las cinco o más letras invertidas. Las cadenas aprobadas consistirán solo de letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.

Ejemplos:

    reverse("Reverse") ➞ "esreveR"

    reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

    reverse("The dog is big.") ➞ "The dog is big."

Notas
Puede esperar que se proporcione una cadena válida para cada caso de prueba.
*/