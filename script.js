function convert()
{
    var val=document.getElementById("input").value.trim();
    var type=document.getElementById("option").value;
    var result="";
    if(type==="charToAscii"){
        result=val.charCodeAt(0); 
    }else if(type==="asciiToChar"){
        result=String.fromCharCode(parseInt(val));
    }else if(type==="decToBin"){
        result=parseInt(val).toString(2);
    }else if(type==="binToDec"){
        result=parseInt(val,2);
    }else if(type==="octToDec"){
        result=parseInt(val,8);
    }else if(type==="decToOct"){
        result=parseInt(val).toString(8);
    }else if(type==="hexToDec"){
        result=parseInt(val,16);
    }else if(type==="decToHex"){
        result=parseInt(val).toString(16);
    }else{
        result="Invalid Option";
    }
    document.getElementById("output").innerText="Result:"+result;
    }