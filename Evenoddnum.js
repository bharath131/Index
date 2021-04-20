var a='0';
var b='0';
var text='';

function check(){
    a=parseInt(document.getElementById('Lower').value);
    b=parseInt(document.getElementById('Upper').value);
    if(a>b){
        document.getElementById('Result').value='Enter Proper Lower,Upper Limit Values'
    }
    else{
        document.getElementById('Result').value='Press Even or Odd Number'
    }
}

function oddNumbers(){
    a=parseInt(document.getElementById('Lower').value);
    b=parseInt(document.getElementById('Upper').value);

    for(var n=a; n<=b;n++){

     if(n%2!=0){
       
        text += "The odd number is " + n+ "\n";
        
        //console.log('Odd Numbers'+n);
     }
    }
    document.getElementById('Result').value=text;
}

function EvenNumbers(){
    a=parseInt(document.getElementById('Lower').value);
    b=parseInt(document.getElementById('Upper').value);

    for(var n=a; n<=b;n++){

     if(n%2==0){

        text += "The Even number is " + n+ "\n";

    //console.log('Even Numbers'+n);
        
     }
    }
    document.getElementById('Result').value=text;
    return false;
}