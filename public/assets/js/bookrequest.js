
console.log("imma here");
var messagesRef = firebase.database().ref('messages');

const bookrequest = document.querySelector('#book-form')
console.log(bookrequest);

if(bookrequest !== null){
    bookrequest.addEventListener('submit',e => {
        e.preventDefault()
        
        const package = bookrequest['package-select-option'].value;
        console.log(package);
        const dates = bookrequest['weekday-picker'].value;
        const weekends = bookrequest['weekend-picker'].value;
        console.log(dates,weekends);
        const package = bookrequest['package-select-option'].value;
        const package = bookrequest['package-select-option'].value;
        //const aadhar = bookrequest['aadhar'].value;
       // const phone = bookrequest['phone'].value;
    //    console.log(name)
     //    console.log(aadhar)
      //    console.log(phone)  

       //saveMessage(name,aadhar,phone);

       //Reset the fields back to original it was.
       //document.getElementById('user-info').reset();
 
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