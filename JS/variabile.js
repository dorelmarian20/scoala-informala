var numeVariabila = 5;//camelCase
var $t_est = "test";//snake_Case
var integer = 5;//integer aka number
var floatVar = 5.7;//float/double aka number
var stringVar = "test";//string
var stringVar = `test`;//tick ne lasa sa scriem pe mai multe randuri
var booleanTrue = true;
var booleanFalse = false;
var nullVar = null;//lipsa
var undefinedVar = undefined;//lipsa


var x = 5;
var y = 6;
var z = x + y;
z = z + 3;
z = z - 5;
z = z / 3;
z = z * 7;

var str = 'ana are ';
str = str + 'mere';

str = str + 3; // transforma in string

str = '5';
str = str + 3; // '53'
str = 3 + '5';//'35'
str = 1 + 1 + '3';//'23'

str = 'Ana are ' + z + 1  + 'mere'; //'Ana are 211 mere'
str = 'Ana are ' + (z + 1)  + 'mere'; //'Ana are 22 mere'

var m = '5' * 5; // 25 browserul cand vede imultire transforma string in number
var p = '5' / 5; // 1
var n = 'sdasda' * 5; // NaN (not a number)

var strintToNumber = Number("1234");//1234 transformi string in number
//parseInt("1234qweqw") => 1234
//parseFloat("123.45sdads") => 123.45
//Number("123.45sdads") => NaN
//"123" * 1 => 123
console.log(strintToNumber);

var array = [5, 'ana are mere', true];//array
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];//array
//pozitii = 0, 1, 2, 3, 4...
array2[4] // 5
array2[0] = array2[4] + 10; // [15, 2, 3, 4, 5, 6, 7, 8, 9, 0]

array2[0] += 4;//varianta scurta
array2[0]++;
array2[0]--;

var mod = 5 % 2;// restul imartirii lui 5 la 2 => 1

