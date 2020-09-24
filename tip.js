document.querySelector('#theFormForTip').onchange = function() {
    var paidBill = Number(document.getElementById('completeBill').value)

    var theTip = document.getElementById('enterTip').value;

    if (theTip == 0) {
        document.getElementById('p').innerHTML= "*you did not add the tip value";
    } else {
        document.getElementById('p').innerHTML= "";

    }
   //print the range percentage on one side of the div, expecially on the right

   document.getElementById('tipOutput').innerHTML= theTip + "%";
 //caclutaing the percentage output
   var theVlaueOftip = paidBill * (theTip/100);
   console.log(theVlaueOftip);
   //calculating the final value

   var tipFinal = paidBill + theVlaueOftip;

   console.log(tipFinal   + "this sakfdk");

//lets rpint the tip amoun 

var resultTipamount = document.querySelector("#tipResultAmt");

//lets rpint the tip amoun 

var resultBillTip = document.querySelector("#totalBillWithTip");
//we print the value of the tip and toatal bill then roudning any number greater than two
resultTipamount.value = theVlaueOftip.toFixed(2);
resultBillTip.value = tipFinal.toFixed(2);
}