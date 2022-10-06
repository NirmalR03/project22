let a=5;
let b=6;
let c=7;
let Perimeter = a + b + c;
let s = Perimeter/2; 
let Area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log("Area of Triangle Given sides: ",Area);

let i=1;
document.write("Do while Loop<br>");
do{
    document.write(i,"<br>");
    i++;
}while(i<=10);
document.write("<br>while Loop<br><br>");
while(i<=20)
{
    document.write(i,"<br>");
        i++;
}
document.write("<br>For Loop : <br>")
for(;i<=30;i++)
{
    document.write(i,"<br>");
}
file="index.html";
console.log("File Extention is : ",file.split(".").pop());
let num1=5,num2=5;
let sum=num1+num2;
if(num1==num2)
{
    console.log("Tripe the sum is :",num1,"&",num2,"=",sum*sum*sum);
}
else{
    console.log("sum :",num1," + ",num2,"=",sum);
}


