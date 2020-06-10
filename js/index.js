 console.log("connected");

 $(document).ready(function(){
     $("#customerForm").validate({

         submitHandler: savecustomerData
     })
 });


function savecustomerData(form){

    // pick the data from the inputs

    let customerName = $("input[name=customerName]").val();

    let roomwidth = $("select[name=roomwidth]").val();
    let roomlength = $("input[name=roomlength]").val();
    let clrName = $("input[name=clrName]").val();
    let paint_type = $("input[name=paint_type]:checked").val();
    let cans = (roomlength*roomlength)/400;

    let totalCost= (cans * paint_type)* 1.13    //rate  per paint type , adding 0.13% hst

    // it is a shortcut to make the object from variables
    let customerData = {customerName, roomwidth, roomlength, clrName, paint_type, cans, totalCost};

    // log the object content for debugging
    console.log(customerData);

    // put the object data into localStorage
    localStorage["customerData"] = JSON.stringify(customerData);

    // go to them next page
    form.submit();
}