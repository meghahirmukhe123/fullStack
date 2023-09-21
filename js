//two ways to use js in html file 
1]inline
2]external

//to add external(another,outside) js file in html
-inside head tag
EX:file name is myFile
<Script src="myFile.js"></Script>

//to add inline(internal) js file in html
<Script>
   //write js code here
</Script>

//to declare variable use 'var'
var a= 10
var name="megha"
var b= 1.2

//to call function
<Script>
function sum(a,b)
{
var c= a+b;
}
sum(10,20);   ///to call function
</Script>

//to find ASCII value of character
ex: String str="megha";
sout(str.charAtCodeAt(2));   //it will print ascii value of character present at index 2

//.localeCompare
ex: String str="megha";
sout(str.localeCompare("abc");  //if abc is present in given string it will print 1 else it will print -1
in above condition it will print -1 bcoz "abc" is not present in given string "megha".


//What is the difference between let, const, and var in JavaScript?
- var and let can be reassigned but variables declared with const can't be reassigned.
//
What is the difference between null and undefined in JavaScript?
-Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value. 
Undefined, on the other hand, means the variable has been declared, but its value has not been assigned.

//What is the difference between synchronous and asynchronous code in JavaScript?
-Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously.
 Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.

//ECMA script
-ecma organization created standard(rule) for some technologies.
-ecma script is a script which shows how should be a basic scripting language.
-ES6,ES7,ES8 .... are ECMA script 6,ECMA script 7,ECMA script 8.....etc
