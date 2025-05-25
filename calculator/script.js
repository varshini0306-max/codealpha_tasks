function apendToDisplay(input)
{
    var display=document.getElementsByid("display");
    document.getElementById("display")=display.value += input;

}

function removefromdisplay()
{
    var display=document.getElementById("display");
    document.getElementById("display")=display.value.slice(0,-1) += input; 
}

function allcleardisplay()
{
    var display=document.getElementById("display");
    document.getElementById("display")=display.value += '';
}

 function calculate() 
 {
    var display=document.getElementById("display");
    var result;
      try 
      {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
      }
       catch (error) 
       {
        display.value="error";
      }
    }
