console.log("Welcome to profile.js")

var docRef="3";
var UserName="UserName";
var Address="Address";
var PhoneNumber="PhoneNumber";
var EmailId="EmailId";
var DateOfBirth="DOB";
var Package="package";
var dates="dates";
var  Location="location";
var time="time";
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User is signed in toh there should not be login and register.");
        docRef=db.collection("people").doc(user.uid);
        console.log(user.uid)
        db.collection("people").doc(user.uid)
            .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        UserName=doc.data().UserName;
        Address=doc.data().Address;
        PhoneNumber=doc.data().PhoneNumber;
        EmailId=doc.data().EmailId;


        // DateOfBirth=doc.data().DateOfBirth;
        // Package=doc.data().package;
        // dates=doc.data().dates;
        // Location=doc.data().location;
        // time=doc.data().time;
        
        console.log(UserName, Address, PhoneNumber, EmailId);
        document.getElementById("UserId").innerHTML = EmailId; 
    });
    
    db.collection('people/' + user.uid + '/bookings').get().then((subCollectionSnapshot) => {
    subCollectionSnapshot.forEach((subDoc) => {
        console.log(subDoc.data());
    });
    });
       
    }
});

