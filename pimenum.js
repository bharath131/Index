var a=0;n=0;count=0;
function prime(){
   a=parseInt(document.getElementById('Number').value);
if(a==1){
   document.getElementById('Result').value='One is not a Prime or Whole Number'
}
else{
for(n=a;n>=0;n--)
{
 if(a%n==0){

    count=count+1;
 }

}

if(count>=3){
   document.getElementById('Result').value='Given Number Not a prime Number';
}
else{
   document.getElementById('Result').value='Given Number is Prime Number';
}
}
return false;
}
