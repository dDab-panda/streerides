console.log("welcome to details-shown.js")

const shownnumber = document.querySelectorAll('.shown-number');
const shownemail = document.querySelectorAll('.shown-email');
const details = document.querySelector('#signup-form');

console.log(details)
var docRef="3";
var EmailId="random";
var PhoneNumber="random";
var Password="password";


auth.onAuthStateChanged(user => {
    console.log("here we will check all the information we have of user");

      if (user.email) {
        console.log("the email is already there");
        EmailId=user.email;
        console.log(user.email)
        shownemail.forEach((link) => {
            link.style.display = "none";
        })
    } 
    if (user.phoneNumber) {
        console.log("the phone number is already there");
        console.log(user.phoneNumber)
        PhoneNumber=user.phoneNumber;
        shownnumber.forEach((link) => {
            link.style.display = "none";
        })
    } 
    if (user.password) {
        console.log("the phone number is already there");
        Password=user.password;
    } 
    docRef=db.collection("people").doc(user.uid);
});


if(details !== null){
    details.addEventListener('submit',e => {
        e.preventDefault()
        
        var name = details['name'].value;
        var DOB = details['DOB'].value;
        var address = details['address'].value;
        if(EmailId==="random"){
            EmailId=details['email'].value;
        }
        if(PhoneNumber==="random"){
            PhoneNumber=details['contact-number'].value;
        }
        if(Password==="password"){
            Password="None";
        }
        // sessionStorage.setItem("UserName", name);
        // sessionStorage.setItem("DateOfBirth", DOB);
        // sessionStorage.setItem("address", address);

        console.log(name,DOB,address);
        docRef.set({
            UserName: name,
            DateOfBirth: DOB,
            Address: address,
            EmailId: EmailId,
            PhoneNumber: PhoneNumber,
            Password: Password,
          }).then(function(){
            console.log("Status Saved")
            window.location="book.html";
          }).catch(function(error){
            console.log("Caught an error", error)
          });

        
        
        
    })
}

