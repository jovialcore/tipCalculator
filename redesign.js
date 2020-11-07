
document.querySelector('#check').onclick = function() {
    var paidBill = Number(document.getElementById('completeBill').value)

    // var theTip = document.getElementById('enterTip').value;
        
        var tipOwn = document.getElementById('enterTip').value;

   //print the range percentage on one side of the div, expecially on the right
 //caclutaing the percentage output
 regex = RegExp('^[1-9][0-9]?$|^100$');
 if (regex.test(tipOwn)== false) {
     document.getElementById('er').innerHTML = "Numbers from 0-100 are allowed.Try again";
  
 }  else if (regex.test(tipOwn) == true) {

    document.querySelector("#enterTip").addEventlistener("oninput", function () {
        document.getElementById('enterTip').value = "";

    });    

    document.getElementById('er').innerHTML = "";
    var theVlaueOftip = paidBill * (tipOwn/100);
    console.log(theVlaueOftip);
    //calculating the final value
 
    var tipFinal = paidBill + theVlaueOftip;
 //lets rpint the tip amoun 
 
 var resultTipamount = document.querySelector("#tipResultAmt");
 
 //lets rpint the tip amoun 
 
 var resultBillTip = document.querySelector("#totalBillWithTip");
 //we print the value of the tip and toatal bill then roudning any number greater than two
 resultTipamount.innerHTML = "N" + theVlaueOftip.toFixed(2) ;
 resultBillTip.innerHTML = "N" + tipFinal +".00";
     
    } 

}