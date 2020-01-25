var messagesRef = firebase.database().ref('messages');

const submitForm = document.querySelector('#user-info')
console.log(submitForm)

if(submitForm !== null){
    submitForm.addEventListener('submit',e => {
        e.preventDefault()
        
        const name = submitForm['name'].value;
        const aadhar = submitForm['aadhar'].value;
        const phone = submitForm['phone'].value;
    //    console.log(name)
     //    console.log(aadhar)
      //    console.log(phone)

       saveMessage(name,aadhar,phone);

       //Reset the fields back to original it was.
       document.getElementById('user-info').reset();
 
    })
}

function saveMessage(name,aadhar,phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      aadhar:aadhar,
      phone:phone,
    });
  }