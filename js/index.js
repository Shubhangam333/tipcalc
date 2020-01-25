var calculateTip = function(){
    var billAmt=document.getElementById('billamt').value;
    var serviceQual=document.getElementById('serviceamt').value;
    var numOfPeople=document.getElementById('pamt').value;

    if(billAmt===''|| serviceQual==0){
        alert("Please enter values");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "block";
      }
    
      //Calculate tip
      var total = (billAmt * serviceQual) / numOfPeople;
      //round to two decimal places
      total = Math.round(total * 100) / 100;
      //next line allows us to always have two digits after decimal point
      total = total.toFixed(2);
      //Display the tip
      document.getElementById("totalTip").style.display = "block";
      document.getElementById("tip").innerHTML = total;
    
    };
    
    //Hide the tip amount on load
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    
    //click to call function
    document.getElementById("calculate").onclick = function() {
      calculateTip();
    
    };