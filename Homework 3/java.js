function Fibonacci(x){
    arr = new Array(x);
    for(var i =0; i <= x; i++){
        if(i == 0 || i == 1){
            arr[i] = i;
        }
        else{
            arr[i] = arr[i-1] + arr[i-2];
        }
        if(i % 2 == 0){
            document.write("<tr class = 'evenrow'><th>" + i + "</td><td>" + arr[i] + "</td></tr>");
        }
        else{
            document.write("<tr><th>" + i + "</td><td>" + arr[i] + "</td></tr>");
        }
    }
}
var number = prompt("How many fibonacci numbers would you like to see?"); 
document.write("<table><caption>Fibonacci Numbers</caption>");
document.write("<tr><th>Number</th><th>Corresponding Fibonacci Number</th></tr>");
Fibonacci(number);
document.write("</table>");