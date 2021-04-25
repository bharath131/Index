var a=0;c=0;b=0;d=0;e=0;
 
function palindrom()
{
    a=parseInt(document.getElementById('Number').value);
     e=a;
while(e>0)
{
   b=e%10;

  c=b+(c*10);
  d=parseInt(e/10);
  e=d;
}
if(a==c)
{
    document.getElementById('Result').value='Given number is  a palindrom';
}
else
{
    document.getElementById('Result').value='Given number is Not a palindrom';
}
return false;
}



