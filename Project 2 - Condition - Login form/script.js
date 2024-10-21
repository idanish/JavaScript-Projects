
let ausername = ['user-danish1', 'user-danish2', 'user-danish3']
let aname = ['Danish1', 'Danish2', 'Danish3']
let aemail = ['danish1@email.com', 'danish2@email.com', 'danish3@email.com']


let busername = document.getElementById('txt-username').value;
let bname = document.getElementById('txt-name').value;
let bemail = document.getElementById('txt-email').value;



function btnSubmit() {
    document.getElementById('a').innerHTML = busername;
    document.getElementById('b').innerHTML = bname;
    document.getElementById('c').innerHTML = bemail;
}



// function btnSubmit(){

//     ausername.push(busername)
//     aname.push(bname)
//     aemail.push(bemail)
// }


for (let i = 0; i < ausername.length; i++) {

    document.getElementById('srNo').innerHTML += 1 + i + "</br>";
    document.getElementById('username').innerHTML += ausername[i] + "</br>";
    document.getElementById('name').innerHTML += aname[i] + "</br>";
    document.getElementById('email').innerHTML += aemail[i] + "</br>";

}


