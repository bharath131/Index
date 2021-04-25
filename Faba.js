var a=0;b=1;c=0;n=0;text='';
function faba(){

    n=parseInt(document.getElementById('Number').value);

while(n>0){

    text += a+'\n';
    document.getElementById('Result').value=text;
    c=a+b;
    a=b;
    b=c;
    n--
   
}

}