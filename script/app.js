// Initializing class
const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser')

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show an alert - UI class

        } else {
          // Show the profile - UI class
          ui.showProfile(data.profile)
        }
      })
  } else {
    // Clear profile - UI class
    ui.clearProfile();
  }
})