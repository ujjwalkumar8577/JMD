function calculate() {

    var form = document.getElementById("order-form");
    var i1=form.elements[3].value;
    var i2=form.elements[4].value;
    var i3=form.elements[5].value;
    var i4=form.elements[6].value;
    var i5=form.elements[7].value;

    var amt=i1*203+i2*216+i3*346+i4*415+i5*203;

    console.log("Calculated Amount : " + amt);
    document.getElementById("amount").innerHTML = "Your Order Amount is Rs. " + amt;
}
