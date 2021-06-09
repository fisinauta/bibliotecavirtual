function MostrarOcultar(capa) 
{ 
    document.getElementById(capa).style.display = "none"; 
    if (capa=='actbusqbas')
    {
        document.getElementById('actbusq').style.display = "block";  
        document.getElementById('formbusq').style.display = "block"; 
        document.getElementById('formbusqavanz').style.display = "none";  
        
    }
    else
    {
        document.getElementById('actbusqbas').style.display = "block"; 
        document.getElementById('formbusqavanz').style.display = "block"; 
        document.getElementById('formbusq').style.display = "none";   
    }
    document.getElementById('table_div').style.display = "none";
    document.getElementById('buscador').style.height="324px"; 
} 

function buscarlibro() 

{   
    var altura="";
    document.getElementById('formbusqavanz').style.display = "none"; 
    document.getElementById('formbusq').style.display = "none";   
    document.getElementById('table_div').style.display = "block"; 
    document.getElementById('table_div').style.position="absolute";
    document.getElementById('table_div').style.top="37%";
    document.getElementById('table_div').style.left="3%";
    document.getElementById('table_div').style.width="94%";
    altura=(document.getElementById('table_div').offsetHeight+33)+'px';
    document.getElementById('buscador').style.height=altura;
    return (false);
  
}