
console.log("Welcome to Bookrequest.js");
var messagesRef = firebase.database().ref('booking-info');

const bookrequest = document.querySelector('#book-form')


const docRef=db.doc("booking-info/people");

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
      docRef.set({
        package: package,
        dates: dates,
        location: location,
        time: time,
        comments: comments,
      }).then(function(){
        console.log("Status Saved")
      }).catch(function(error){
        console.log("Caught an error", error)
      });

      //  Reset the fields back to original it was.
       document.getElementById('book-form').reset();
 
    })
}

