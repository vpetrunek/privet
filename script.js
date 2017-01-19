alert("Hello world!");
var answer=0; 
for (var i=0;i<5;i++){ 
var x=Math.floor(Math.random()*100)+0; 
var y=Math.floor(Math.random()*100)+0; 
var z=x+y; 
var d=prompt(x+"+"+y+"="); 
d=parseInt(d); 
if(Number.isNaN(d)) window.alert('Это ни число'); 
if(d==z) answer++; 
} 
window.alert(answer); 