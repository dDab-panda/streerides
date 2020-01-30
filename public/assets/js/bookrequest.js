
console.log("Welcome to Bookrequest.js");
var messagesRef = firebase.database().ref('booking-info');
var docRef="3";
var userid=null;
  auth.onAuthStateChanged(user => {
      if (user) {
          console.log("User is signed in toh there should not be login and register.");
          userid=user.uid;
          
      }
  });


const bookrequest = document.querySelector('#book-form')
var bookingId="null";

if(bookrequest !== null){
    bookrequest.addEventListener('submit',e => {
        e.preventDefault()
        
        const package = bookrequest['package-select-option'].value;
        console.log(package);
        var dates=null;

        if(package==="weekday"){
          dates = bookrequest['weekday-picker'].value;
        }
        else{
          dates = bookrequest['weekend-picker'].value;
        }
        console.log(dates)
     
        const location=bookrequest['location-value'].value;
        const time=bookrequest['time-value'].value;
        const comments=bookrequest['comment-value'].value;
        console.log(location, time, comments)
    

      //  saveMessage(package, dates, location, time, comments);

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
        console.log(bookingId)

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    db.collection("bookings").doc(bookingId).set({
      package: package,
      dates: dates,
      location: location,
      time: time,
      comments: comments,
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
      // console.log(db.collection("people").doc(userid).collection("bookings").doc().id)
      //  Reset the fields back to original it was.
       document.getElementById('book-form').reset();
 
    })
}

