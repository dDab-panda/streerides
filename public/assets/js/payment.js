console.log("Welcome to payment.js");
var messagesRef = firebase.database().ref('booking-info');
var docRef="3";

const payment_test = firebase.functions().httpsCallable('payment_test');
const hash_test = firebase.functions().httpsCallable('hash_test');
var bookrequestinfo = document.querySelector('#book-form')
auth.onAuthStateChanged(user => {
  if (user) {
    // console.log("User is signed in toh there should not be login and register.");
    userid=user.uid;
    var user = firebase.auth().currentUser;
    var name,email,number;
    
    //console.log(name,email,number);
    
    
    db.collection("people").doc(userid).get().then(result => {
      console.log(result);
      console.log(result.data());
      console.log(result.data().EmailId);
      console.log(result.data().PhoneNumber);
      console.log(result.data().UserName);
      
      name = result.data().UserName;
      email = result.data().EmailId;
      number = result.data().PhoneNumber;
      
      bookrequestinfo.addEventListener('submit',e => {
        e.preventDefault();
        
        console.log("button pressed");
        payment_test({amount:10}).then(result=>{
          console.log(result);
          const orderid = result.data.id;
          console.log(orderid);
          var options = {
            "key": "rzp_test_fxT0yX4dfSPlU9", // Enter the Key ID generated from the Dashboard
            "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
            "currency": "INR",
            "name": "Streerides",
            "description": "Women empowerment",
            "image": "/assets/img/streerides-logo.jpg",
            "order_id": orderid,// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
            "handler":function (response){
              checkHash(response,userid);
            },
            "prefill": {
              "name": name,
              "email": email,
              "contact": number
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
      })
      
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    
    
  }
});


function checkHash(response,userid) {
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
      afterpayment(userid);
    }
    else console.log("failure as you are");
  });
}


function afterpayment(userid) {
  var bookingId="null";
  const package = bookrequestinfo['package-select-option'].value;
  console.log(package);
  var dates=null;
  
  if(package==="weekday"){
    dates = bookrequestinfo['weekday-picker'].value;
  }
  else{
    dates = bookrequestinfo['weekend-picker'].value;
  }
  console.log(dates)
  
  const location=bookrequestinfo['location-value'].value;
  const time=bookrequestinfo['time-value'].value;
  const comments=bookrequestinfo['comment-value'].value;
  console.log(location, time, comments)
  
  
  //  saveMessage(package, dates, location, time, comments);
  console.log(userid)
  
  db.collection("people").doc(userid).collection("bookings").add({
    package: package,
    dates: dates,
    location: location,
    time: time,
    comments: comments,
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    bookingId=docRef.id;
    console.log("in the then fucntion to check copy hora hau ya nahi",bookingId)
    
    db.collection("bookings").doc(bookingId).set({
      UserId:userid,
      package: package,
      dates: dates,
      location: location,
      time: time,
      comments: comments,
    })
    
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
  
  //   console.log(bookingId)
  //   db.collection("bookings").doc(bookingId).add({
  //     package: package,
  //     dates: dates,
  //     location: location,
  //     time: time,
  //     comments: comments,
  // })
  // .then(function(docRef) {
  //   console.log("the booking id is", bookingId)
  
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
  //     // console.log(db.collection("people").doc(userid).collection("bookings").doc().id)
  //  Reset the fields back to original it was.
  document.getElementById('book-form').reset();
  // window.location = "profile.html";
  
  
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



