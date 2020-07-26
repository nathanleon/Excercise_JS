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



/**********************************E8**************************************/

/*
Invierta el orden de las palabras con cinco letras o más:
Escriba una función que tome una cadena de una o más palabras como argumento y devuelva la misma cadena, pero con las cinco o más letras invertidas. Las cadenas aprobadas consistirán solo de letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.

Ejemplos:

    reverse("Reverse") ➞ "esreveR"

    reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

    reverse("The dog is big.") ➞ "The dog is big."

Notas
Puede esperar que se proporcione una cadena válida para cada caso de prueba.

Test:
Test.assertEquals(reverse("Reverse"), "esreveR");
Test.assertEquals(reverse("This is a typical sentence."), "This is a lacipyt .ecnetnes");
Test.assertEquals(reverse("The dog is big."), "The dog is big.");
Test.assertEquals(reverse("Reverse the order of every word greater than or equal to five characters."), "esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc");
Test.assertEquals(reverse("Lets all be unique together until we realise we are all the same."), "Lets all be euqinu rehtegot litnu we esilaer we are all the .emas");
Test.assertEquals(reverse("The old apple revels in its authority."), "The old elppa slever in its .ytirohtua");
Test.assertEquals(reverse("The shooter says goodbye to his love."), "The retoohs says eybdoog to his .evol");
Test.assertEquals(reverse("Please wait outside of the house."), "esaelP wait edistuo of the .esuoh");
Test.assertEquals(reverse("Two seats were vacant."), "Two staes were .tnacav");
Test.assertEquals(reverse("Sixty-Four comes asking for bread."), "ruoF-ytxiS semoc gniksa for .daerb");

Array.prototype.map()
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de cadenas en sub cadenas
Sintaxis:
cadena.split([separador][,limite])

El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
arr.join([separator])
El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
El método reverse cruza los elementos del objeto matriz invocados en su lugar, mutando la matriz, y retornando una referencia a la misma.
*/

function reverse(str) {
  let divide = str.split(' ');
  divide = divide.map(
      function(val){
          if(val.length > 4){
        // split() retorna un array en el cual reverse() y join() pueden ser aplicados
          return val.split('').reverse().join('');
    }
    return val;
  });
  return divide.join(' ');
}


/*******************E9**********************/
/*
Recursión: invertir una cadena
Escribe una función que invierta una cadena. Haz tu función recursiva.

Ejemplos:
reverse("hello") ➞ "olleh"
reverse("world") ➞ "dlrow"
reverse("a") ➞ "a"
reverse("") ➞ ""
*/

function reverse(str){
  return str.split('').reverse().join('');
}

/***************E10******************/
/**
Suma de los elementos en una matriz
Cree una función que tome una matriz y devuelva la suma de todos los elementos de la matriz.
Examples:
sumArray([1, 2, 3]) ➞ 6
// 1 + 2 + 3 = 6
sumArray([1, [2, [1]], 3]) ➞ 7
// 1 + 2 + 1 + 3 = 7


test: 
Test.assertEquals(sumArray([1, 2, 3]), 6)
Test.assertEquals(sumArray([1, [1, 2], [3, 1]]), 8)
Test.assertEquals(sumArray([[1, 1], [2, 8], 8]), 20)
Test.assertEquals(sumArray([1, 2]), 3)
Test.assertEquals(sumArray([1, [2, [1]], 3]), 7)

El flat()método crea una nueva matriz con todos los elementos de la submatriz concatenados recursivamente hasta la profundidad especificada.
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function sumArray(arr) {
  let arrFlat = arr.flat(Infinity)
  let suma = 0
  for (let i = 0; i < arrFlat.length ; i++){
    suma += arrFlat[i]
  }
	return suma
}

/***************E11******************/
/**
Recursion: Count Vowels
Escriba una función que devuelva recursivamente el número de vocales en una cadena.
Ejemplos
countVowels("apple") ➞ 2
countVowels("cheesecake") ➞ 5
countVowels("bbb") ➞ 0
countVowels("") ➞ 0
Notas
Todas las letras estarán en minúsculas.
Las vocales son: a, e, i, o, u.

El match()método recupera el resultado de hacer coincidir una cadena con una expresión regular .
test:
Test.assertEquals(countVowels("apple"), 2)
Test.assertEquals(countVowels("cheesecake"), 5)
Test.assertEquals(countVowels("martini"), 3)
Test.assertEquals(countVowels("rhythm"), 0)
Test.assertEquals(countVowels(""), 0)
Test.assertEquals(countVowels("b"), 0)
Test.assertEquals(countVowels("a"), 1)
Test.assertEquals(countVowels("bbbbbb"), 0)
Test.assertEquals(countVowels("bbbbba"), 1)
Test.assertEquals(countVowels("abbbb"), 1)
Test.assertEquals(countVowels("bbbab"), 1)
Test.assertEquals(countVowels("bbaab"), 2)
Test.assertEquals(countVowels("baabab"), 3)

Operador ternario
condición ? expr1 : expr2 

g
búsqueda global (global match); encuentra todos los resultados en vez de parar después de la primer búsqueda exitosa
i
ignorar mayúsculas o minúsculas

function countVowels(str){
  const regexp = /[aeiou]/gi;
  return (str.match(regexp) == null) ? 0 : str.match(regexp).length;        
}

*/

function countVowels(str){
  const regexp = /[aeiou]/gi;
  if (str.match(regexp) == null){
    return 0
  }else return str.match(regexp).length;        
}

/***************E12******************/
/**
Control de igualdad

En este desafío, debe verificar la igualdad de dos parámetros dados diferentes: a y b.

Tanto el valor como el tipo de parámetros deben probarse para tener una igualdad coincidente. Los posibles tipos de los parámetros dados son:

Números
Strings
Booleanos ( false o true)
Los valores especiales: undefined, null y NaN
¿Qué ha aprendido hasta ahora que le permita hacer dos verificaciones diferentes (valor y tipo) con una sola declaración?

Implemente una función que devuelva true si los parámetros son iguales y false si son diferentes.

Ejemplos
checkEquality(1, true) ➞ false
// A number and a boolean: their type is different

checkEquality(0, "0") ➞ false
// A number and a string: their type is different

checkEquality(1,  1) ➞ true
// A number and a number: their type and value are equal

Notas
Si se queda atrapado en un desafío, busque ayuda en la pestaña Recursos .
Si realmente está atascado, desbloquee soluciones en la pestaña Soluciones .

JavaScript provides three different value-comparison operations:

=== - Strict Equality Comparison ("strict equality", "identity", "triple equals")
== - Abstract Equality Comparison ("loose equality", "double equals")
Object.is provides SameValue (new in ES2015).

test:
Test.assertEquals(checkEquality(1, true), false, "Example #1")
Test.assertEquals(checkEquality(0, "0"), false, "Example #2")
Test.assertEquals(checkEquality(1, 1), true, "Example #3")
Test.assertEquals(checkEquality(0, ""), false)
Test.assertEquals(checkEquality(1, "1"), false)
Test.assertEquals(checkEquality(0, false), false)
Test.assertEquals(checkEquality(NaN, NaN), false)
Test.assertEquals(checkEquality(null, undefined), false)
Test.assertEquals(checkEquality(undefined, undefined), true)
Test.assertEquals(checkEquality(false, null), false)
*/
function checkEquality(a, b) {
  return a===b
}

function checkEquality(a, b) {
   if(a===b){
      return true
   } else return false
}

/***************E13******************/
/**
Is the String Empty?
Create a function that returns true if a string is empty and false otherwise (de lo contrario).
Examples
isEmpty("") ➞ true
isEmpty(" ") ➞ false
isEmpty("a") ➞ false

Notas
Una cadena que contiene sólo espacios en blanco " " no no cuenta como vacía.
No te olvides returndel resultado.
Si se queda atrapado en un desafío, busque ayuda en la pestaña Recursos .
Si realmente está atascado, desbloquee soluciones en la pestaña Soluciones .

Test.assertEquals(isEmpty(""), true)
Test.assertEquals(isEmpty(" "), false)
Test.assertEquals(isEmpty("            "), false)
Test.assertEquals(isEmpty("38215"), false)
Test.assertEquals(isEmpty("afjabsdf"), false)
Test.assertEquals(isEmpty("!?@&"), false)
*/
function isEmpty(s) {
	if (s === ""){
    return true
  } else return false
}

function isEmpty(s) {
	return s.length == 0;
}

function isEmpty(s) {
	return (s.length === 0 ? false : true)
}

function isEmpty(s) {
	return !s
}
/*****************E14***********************
Return the Last Element in an Array*

Create a function that accepts an array and returns the last item in the array.
Examples:
getLastItem([1, 2, 3]) ➞ 3
getLastItem(["cat", "dog", "duck"]) ➞ "duck"
getLastItem([true, false, true]) ➞ true

Notas
No te olvides return del resultado.

test:
Test.assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
Test.assertEquals(getLastItem([1, 2, 3]), 3)
Test.assertEquals(getLastItem([undefined]))
Test.assertEquals(getLastItem([true, false, false, true]), true)
Test.assertEquals(getLastItem([7, 'String', false, undefined, null]), null)
Test.assertEquals(getLastItem([false]), false)
Test.assertEquals(getLastItem([undefined, undefined, undefined]), undefined)
Test.assertEquals(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
Test.assertEquals(getLastItem(['Apple', 'Orange', undefined]), undefined)
Test.assertEquals(getLastItem([true, false, 'Apple']), 'Apple')
Test.assertEquals(getLastItem([null, null, null]), null)
Test.assertEquals(getLastItem([1]), 1)

Acceso a elementos de un array
Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá undefined.
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'
*/

function getLastItem(arr) {
	return arr[arr.length -1]
}

function getLastItem(arr) {
  return arr.pop();
}

/*****************E15***********************
Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.
Examples:
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false

Notes:
Don't forget (no Olvides) to return the result.

Test: 
Test.assertEquals(check([1, 2, 3, 4, 5], 3), true)
Test.assertEquals(check([1, 1, 2, 1, 1], 3), false)
Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 7), true)
Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 8), false)
Test.assertEquals(check([5, 5, 5, 6], 5), true)
Test.assertEquals(check([], 5), false)

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

function check(arr, el) {
	return arr.includes(el)
}

/*****************E16***********************
Basic E-Mail Validation
Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

La cadena debe contener un carácter @ .
La cadena debe contener un  carácter .
El @ debe tener al menos un carácter en frente de ella.
Por ejemplo, "e@edabit.com"es válido mientras "@edabit.com"no es válido.
El .y el @ debe estar en los lugares apropiados.
Por ejemplo, "hello.email@com"no es válido mientras "john.smith@email.com"es válido.
Si la cadena pasa estas pruebas, se considera una dirección de correo electrónico válida.

Notas:
Ejemplos
validateEmail("@gmail.com") ➞ false
validateEmail("hello.gmail@com") ➞ false
validateEmail("gmail") ➞ false
validateEmail("hello@gmail") ➞ false
validateEmail("hello@edabit.com") ➞ true

Notas
Consulte la pestaña Pruebas para ver exactamente lo que se está evaluando.
Puede resolver este desafío con RegEx, pero está destinado a resolverse con lógica.
Las soluciones que usan RegEx serán aceptadas pero desaprobadas :(

  Test.assertEquals(validateEmail('@edabit.com'), false)
Test.assertEquals(validateEmail('@edabit'), false)
Test.assertEquals(validateEmail('matt@edabit.com'), true)
Test.assertEquals(validateEmail(''), false, "Don't forget about empty strings!")
Test.assertEquals(validateEmail('hello.gmail@com'), false)
Test.assertEquals(validateEmail('bill.gates@microsoft.com'), true)
Test.assertEquals(validateEmail('hello@email'), false)
Test.assertEquals(validateEmail('%^%$#%^%'), false)
Test.assertEquals(validateEmail('www.email.com'), false)
Test.assertEquals(validateEmail('email'), false)

El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
Sintaxis
array.indexOf(searchElement[, fromIndex])

OR (||) lógico 	expr1 || expr2 	

Regresa expr1 si tal puede convertirse a true; de lo contrario, regresa expr2. De esta forma, cuando se usa con valores Boolean, || regresa true si cualquier operando es verdadero; pero si ambos son falsos, regresa "false".

El  método lastIndexOf() devuelve la posicion (indice) en la que se encuentra el valorBusqueda, dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla. La búsqueda se realiza empezando por el final de la cadena que realiza la llamada, empezando en indiceDesde.

cadena.lastIndexOf(valorBusqueda[, indiceDesde])
*/

function validateEmail(str) {
    if (str.indexOf('@') < 1 || str.indexOf('.') < 1 || str.lastIndexOf('.') < str.indexOf('@') 
     ) return false;
  return true;
}

/***********E17********************
Remove Duplicates from an Array
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

Examples
removeDups([1, 0, 1, 0]) ➞ [1, 0]
removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

Notes
Tests contain arrays with both strings and numbers.
Tests are case sensitive.

Test: 
Test.assertSimilar(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
Test.assertSimilar(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
Test.assertSimilar(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])
Test.assertSimilar(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7])
Test.assertSimilar(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$'])
Test.assertSimilar(removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [3, 'Apple', 'Orange'])

... debuelve un nuevo array
new Set
El objeto Set permite almacenar valores únicos de cualquier tipo, desde valores básicos hasta objetos, con el única limitación de que no pueden estar duplicados.
 */

function removeDups(arr) {
  return [...new Set(arr)];
}


/*************E18******************
Validación del código PIN del cajero automático
Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener más que exactamente 4 dígitos o exactamente 6 dígitos. Su tarea es crear una función que tome una cadena y regrese true si el PIN es válido y false si no lo es.

Ejemplos
validatePIN("1234") ➞ true
validatePIN("12345") ➞ false
validatePIN("a234") ➞ false
validatePIN("") ➞ false

Notas
Algunos casos de prueba contienen caracteres especiales retornar false.
Las cadenas vacías deben devolver falso.
 
Test.assertEquals(validatePIN("1234"), true);
Test.assertEquals(validatePIN("12345"), false);
Test.assertEquals(validatePIN("a234"), false);
Test.assertEquals(validatePIN(""), false);
Test.assertEquals(validatePIN("%234"), false);
Test.assertEquals(validatePIN("`234"), false);
Test.assertEquals(validatePIN("@234"), false);
Test.assertEquals(validatePIN("#234"), false);
Test.assertEquals(validatePIN("$234"), false);
Test.assertEquals(validatePIN("*234"), false);
Test.assertEquals(validatePIN("5678"), true);
Test.assertEquals(validatePIN("^234"), false);
Test.assertEquals(validatePIN("(234"), false);
Test.assertEquals(validatePIN(")234"), false);
Test.assertEquals(validatePIN("123456"), true);
Test.assertEquals(validatePIN("-234"), false);
Test.assertEquals(validatePIN("_234"), false);
Test.assertEquals(validatePIN("+234"), false);
Test.assertEquals(validatePIN("=234"), false);
Test.assertEquals(validatePIN("?234"), false);

Leer mas sobre expresiones regulares en JS

*/

function validatePIN(pin) {
  if(pin.length == 4 || pin.length ==6)
    {      
        let numPin = /[^0-9]/;
      	return numPin.test(pin) ? false:true;
    }
  return false;
}


function validatePIN(pin) {
  if(pin.length == 4 || pin.length ==6)
    {      
        let numPin = /[^0-9]/;
        if (numPin.test(pin == false)){
          return false
        }	else return true
    }
  return false;
}

/********************E19*******************
 ¿El número de teléfono está formateado correctamente?
 
 Cree una función que acepte una cadena y regrese true si está en el formato de un número de teléfono apropiado y false si no lo está. Suponga que cualquier número entre 0-9 (en los lugares apropiados) producirá un número de teléfono válido.

Así es como se ve un número de teléfono válido:

(123) 456-7890
Ejemplos
isValidPhoneNumber("(123) 456-7890") ➞ true
isValidPhoneNumber("1111)555 2345") ➞ false
isValidPhoneNumber("098) 123 4567") ➞ false
Notas:
No olvide el espacio después del paréntesis de cierre.

test: 
Test.assertEquals(isValidPhoneNumber("(123) 456-7890"), true)
Test.assertEquals(isValidPhoneNumber("(1111)555 2345"), false)
Test.assertEquals(isValidPhoneNumber("(098) 123 4567"), false)
Test.assertEquals(isValidPhoneNumber("(123)456-7890"), false)
Test.assertEquals(isValidPhoneNumber("abc(123)456-7890"), false)
Test.assertEquals(isValidPhoneNumber("(123)456-7890abc"), false)
Test.assertEquals(isValidPhoneNumber("abc(123)456-7890abc"), false)
Test.assertEquals(isValidPhoneNumber("abc(123) 456-7890"), false)
Test.assertEquals(isValidPhoneNumber("(123) 456-7890abc"), false)
Test.assertEquals(isValidPhoneNumber("abc(123) 456-7890abc"), false)
Test.assertEquals(isValidPhoneNumber("(123)-456-7890"), false)
Test.assertEquals(isValidPhoneNumber("(123)_456-7890"), false)
Test.assertEquals(isValidPhoneNumber("-123) 456-7890"), false)
Test.assertEquals(isValidPhoneNumber("(519) 505-6498"), true)

se me complica mucho las expresiones regulares en JS
*/
function isValidPhoneNumber(str) {
	return str.match(/^\(\d{3}\)\s\d{3}-\d{4}$/) ? true : false;
}