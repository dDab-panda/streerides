const functions = require('firebase-functions');
//const hmac_sha256 = require("crypto-js/hmac-sha512");
var crypto = require('crypto');

const Razorpay = require('razorpay');
const instance = new Razorpay({
  key_id: 'rzp_test_fxT0yX4dfSPlU9',
  key_secret: 'mRNpoWzwkcof4LPpFeBLfaWe'
})


exports.payment_test = functions.https.onCall( (data) => {

  var much = data.amount;
  much = much*100;
  
  var options = {
    amount: much,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
    payment_capture: '1'
  };
 const asynchronousFunction = async () => {
  const response = await instance.orders.create(options);
 // console.log(response);
  return response;
}

return asynchronousFunction();
});

exports.hash_test = functions.https.onCall( (data) => {



var secret = "mRNpoWzwkcof4LPpFeBLfaWe";
const razorpay_order_id = data.one;
const razorpay_payment_id = data.two;

var message = razorpay_order_id + "|" + razorpay_payment_id;
console.log(message);
const hash = crypto.createHmac('sha256', secret)
.update(message)
.digest('hex');
return {
  hashval:hash
};
/*
  const secret = "mRNpoWzwkcof4LPpFeBLfaWe";
  const razorpay_order_id = data.one;
  const razorpay_payment_id = data.two;

  const generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, secret);

  return generated_signature;
 */
});
  /*
   exports.sayHellos = functions.https.onCall((data, context) => {
     
   const name = data.name;
    return {
      your_name: name
    };
  });  

  exports.addNumbers = functions.https.onCall((data, context) => {
    // [END addFunctionTrigger]
      // [START readAddData]
      // Numbers passed from the client.
      const firstNumber = data.fn;
      const secondNumber = data.ln;
      const cn = context;
      // [END readAddData]const expresconst express = require('express');s = require('express');
    
      // [START addHttpsError]
      // Checking that attributes are present and are numbers.
      if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
            'two arguments "firstNumber" and "secondNumber" which must both be numbers.');
      }
      // [END addHttpsError]
    
      // [START returnAddData] 
      // returning result.
      const idn = uuid.v4();
      //console.log(idn);
      return {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        operator: '+',
        operationResult: firstNumber + secondNumber,
        id:idn,
        context:cn
      };
      // [END returnAddData]
    });
*/

  