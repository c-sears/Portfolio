// Initialize Firebase
const config = {
    apiKey: "AIzaSyBeHusaNsn3-pWTamR_0E5vxz7F1QDTQSg",
    authDomain: "portfolio-65d14.firebaseapp.com",
    databaseURL: "https://portfolio-65d14.firebaseio.com",
    projectId: "portfolio-65d14",
    storageBucket: "",
    messagingSenderId: "929611122562"
  };
  firebase.initializeApp(config);

const database = firebase.database()

const add_message = (name, email, message)=>{
    database.ref('messages').set({name, email, message})
}

$(()=>{
    
    // Get input data and commit to database on send message click
    $('#send_message').click(function(e){
        e.preventDefault()

        const name = $('#name').val().trim()
        const email = $('#email').val().trim()
        const message = $('#message').val().trim()

        add_message(name, email, message)

        document.getElementById('my_form').reset()

        $(this).text('Sent!')
        $(this).css({background: '#6ef050', color: '#111'})

    })


})
  