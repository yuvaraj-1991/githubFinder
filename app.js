//Instanciate GitHub
const github = new Github

//Instanciate UI
const ui = new UI

//Search Input

const searchUser = document.getElementById('searchUser')

//Search user event listener 
searchUser.addEventListener('keyup', (e) => {

    //Get input text
    const userText = e.target.value

    if(userText !== ''){
    // Make http call
    github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                //Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        } )
    } else {
        ui.clearProfile()
    }
    
})
