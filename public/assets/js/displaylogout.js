console.log("welcome to display logout")

const logoutui = document.querySelectorAll('.navbar-logout');
  const loginui = document.querySelectorAll('.navbar-login');
  //console.log(logoutui);
  //console.log(loginui);
  auth.onAuthStateChanged(user => {
      if (user) {
          console.log("User is signed in toh there should not be login and register.");
          logoutui.forEach((link) => {
              link.style.display = "none";
          })
          loginui.forEach((link) => {
              link.style.display = "block";
          })
          
          //console.log(user);z
          // User is signed in.
      } else {
          console.log("User has not signed ya logged in yet toh why signout");
          
          
          logoutui.forEach((link) => {
              link.style.display = "block";
          })
          loginui.forEach((link) => {
              link.style.display = "none";
          })
          
          // User is signed out.
      }
  });