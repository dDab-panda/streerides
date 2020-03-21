
console.log("Welcome to Bookrequest.js");

var messagesRef = firebase.database().ref('booking-info');
var docRef="3";
var userid=null;

  auth.onAuthStateChanged(user => {
      if (user) {
          console.log("User is signed in toh there should not be login and register.");
          userid=user.uid;
          console.log("book request mein")
          
      }
  });


var bookrequestinfo = document.querySelector('#book-form')
var bookingId="null";

if(bookrequestinfo !== null){
  bookrequestinfo.addEventListener('submit',e => {
        e.preventDefault()
        
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
 
    })
}

