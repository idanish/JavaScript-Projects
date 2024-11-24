let ausername = ['user-danish1', 'user-danish2', 'user-danish3'];
let aname = ['Danish1', 'Danish2', 'Danish3'];
let aemail = ['danish1@email.com', 'danish2@email.com', 'danish3@email.com'];


function btnSubmit() {

    let busername = document.getElementById("txt-username").value.trim();
    let bname = document.getElementById("txt-name").value.trim();
    let bemail = document.getElementById("txt-email").value.trim();

    if (busername === "" || bname === "" || bemail === "") {
        alert("Error: Username or name or Email Can't be empty")
    } else {
        ausername.push(busername);
        aname.push(bname);
        aemail.push(bemail);

        document.getElementById("txt-username").value = "";
        document.getElementById("txt-name").value = "";
        document.getElementById("txt-email").value = "";

        for (let i = 0; i < ausername.length; i++) {

            document.getElementById('displayData').innerHTML +=
                `<tr id="dataShown">
            
                        <td id="srNo">${1 + i}</td>
                        <td id="username">${ausername[i]}</td>
                        <td id="name">${aname[i]}</td>
                        <td id="email">${aemail[i]}</td>
                        </tr>`
        }

    }
}

