


function login(){
    let user = "user";
    let pass = "123";
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if(!username || !password){
    // alert('Enter both username or Password')
    }
    
        if (user === username && pass === password) {
              alert('success');
        } else {
            // alert('Enter correct username or password');
        }
    
    }