console.log("Welcome to payment.js");
var docRefpay="3";
var userid=null;
var userobject= null;
var UserName=null;
var PhoneNumber=null;
var EmailId =null;
const payment_test = firebase.functions().httpsCallable('payment_test');
const hash_test = firebase.functions().httpsCallable('hash_test');

auth.onAuthStateChanged(user => {
  if (user) {
     // console.log("User is signed in toh there should not be login and register.");
      userid=user.uid;
      var user = firebase.auth().currentUser;
var name,email,uid;


  name = user.displayName;
  email = user.email;
  uid = user.uid;  
    PhoneNumber = null;
  console.log(name,email,uid);

  document.getElementById('rzp-button1').onclick = function(e){
    e.preventDefault();
    console.log("button pressed");
  payment_test({amount:100}).then(result=>{
    console.log(result);
    const orderid = result.data.id;
    console.log(orderid);
    var options = {
      "key": "rzp_test_fxT0yX4dfSPlU9", // Enter the Key ID generated from the Dashboard
      "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
      "currency": "INR",
      "name": "Streerides",
      "description": "Women empowerment",
      "image": "/streerides-logo.jpg",
      "order_id": orderid,// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
      "handler":function (response){
        checkHash(response);
    },
      "prefill": {
          "name": "Aayush",
          "email": email
      },
      "notes": {
          "address": "note value"
      },
      "theme": {
        "color": "#9f418b"
      }
  };
  var rzp1 = new Razorpay(options);
 
      rzp1.open();
      

    

  }).catch(function(error) {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // [START_EXCLUDE]
    console.error('There was an error when calling the Cloud Function payment wakla', error);
    console.log('There was an error when calling the Cloud Function:\n\nError Code: '
        + code + '\nError Message:' + message + '\nError Details:' + details);
   
    // [END_EXCLUDE]
  });
}
  }
});

 function checkHash(response) {
   console.log(response);
   const payid = response.razorpay_payment_id;
   const ordercheckid = response.razorpay_order_id;
   const hashval = response.razorpay_signature;

   hash_test({one:ordercheckid,two:payid}).then(result => {

    console.log(result.data.hashval);
    console.log(hashval);
    const hashgen = result.data.hashval;
    if(hashgen == hashval){
      console.log("payment successful");
    }
    else console.log("failure as you are");

   });

   
 }

 /*
  payment_test({amount:100}).then(result=>{
    console.log(result);
    const orderid = result.data.id;
    

  }).catch(function(error) {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // [START_EXCLUDE]
    console.error('There was an error when calling the Cloud Function payment wakla', error);
    console.log('There was an error when calling the Cloud Function:\n\nError Code: '
        + code + '\nError Message:' + message + '\nError Details:' + details);
   
    // [END_EXCLUDE]
  });

  function startpayment(orderid,) {
  
  }




//  const gettransactionid = firebase.function().httpsCallable('generateid');

  //gettransactionid({name:'aayush'}).then(result=>{
    //  console.log(result.data);
  //})



/*
  const hello = firebase.functions().httpsCallable('sayHellos');

  hello({name:"bansal"}).then(result=>{
    console.log(result);
  }).catch(function(error) {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // [START_EXCLUDE]
    console.error('There was an error when calling the Cloud Function', error);
    console.log('There was an error when calling the Cloud Function:\n\nError Code: '
        + code + '\nError Message:' + message + '\nError Details:' + details);
   
    // [END_EXCLUDE]
  });

  const sendNotification = firebase.functions().httpsCallable('addNumbers');



     
  sendNotification({fn: 0, ln: 1}).then(function(result) {
    console.log('Cloud Function called successfully.', result);
    // Read results of the Cloud Function.
    var firstNumber = result.data.firstNumber;
    var secondNumber = result.data.secondNumber;
    var operationResult = result.data.operationResult;
    var operator = result.data.operator;
    // [START_EXCLUDE]
    console.log('Here is the result of the formula: ' + firstNumber + ' '
        + operator + ' ' + secondNumber + ' = ' + operationResult);
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // [START_EXCLUDE]
    console.error('There was an error when calling the Cloud Function', error);
    console.log('There was an error when calling the Cloud Function:\n\nError Code: '
        + code + '\nError Message:' + message + '\nError Details:' + details);
   
    // [END_EXCLUDE]
  });
  // [END callAddFunction]
*/

  

