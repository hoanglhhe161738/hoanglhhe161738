var open = false

function Show() {
    if (open == false) {
        document.getElementById('myform').style.display='block'
        document.getElementById('mytext').innerHTML = 'Hide Register form'
        open = true
    }
    else {
        document.getElementById('myform').style.display='none'
        document.getElementById('mytext').innerHTML = 'Show Register form'
        open = false
    }
}

function checkForm() {
    var name = document.getElementById('t1').value
    var email = document.getElementById('t2').value
    var text = "Register successfully"
    if (name == '' || email == '') {
        text = "is empty, please try again"
        if (name == '') {
            text = 'name ' + text
        }
        if (email == '') {
            text = 'email ' + text
        }
    }
    alert(text)
}