$( document ).ready(function() {

var correct = false;
var name = $('#name');
var surname = $('#surname');
var email = $('#email');
let errorMsgName = $("#error-msg-name");
let errorMsgSurname = $("#error-msg-surname");
let errorMsgEmail = $("#error-msg-email");
let errorMsgMessage = $("#error-msg-message");

// Walidacja pola First Name
function checkName() {
    if (name.val().length == 0) {
        errorMsgName.text("This field is required");
        correct = false;
    } else if (name.val().length == 1) {
        errorMsgName.text("Your name is too short")
        correct = false;
    } else {
        errorMsgName.text("");
        correct = true;
    }
    return correct
}

name.on("focusout", checkName);

// Walidacja pola Surname
function checkSurname() {
    if (surname.val().length == 0) {
        errorMsgSurname.text("This field is required");
        correct = false;
    } else if (surname.val().length == 1) {
        errorMsgSurname.text("Your surname is too short")
        correct = false;
    } else {
        errorMsgSurname.text("");
        correct = true;
    }
    return correct
}

surname.on("focusout", checkSurname);

// Walidacja pola Email
function checkEmail(e) {
    if (email.val().length == 0) {
        errorMsgEmail.text("This field is required");
        correct = false;
    } else if (email.val().includes("@") == false) {
        errorMsgEmail.text("This is not a valid email address");
        correct = false;
    } else {
        errorMsgEmail.text("");
        correct = true;
    }
    return correct
}

email.on("focusout", checkEmail );

// Wysyłka formularza
$('.form').on('submit', function(e) {
    e.preventDefault();
    if (checkName() === false || checkSurname() === false || checkEmail() === false) {
        console.log("Nie można wysłać")
    } else {
        var dataToSend = $("this").serializeArray();
        dataToSend = {
            name : $('#name').val(),
            surname : $('#surname').val(),
            email : $('#email').val(),
            message : $('#message').val(),
        }
        console.log("Można wysłać - wyśle się to: ", dataToSend)

        $.ajax({
            url : "http://hello-poland.org/contact.php",
            method: "POST",
            dataType : 'json',
            data : dataToSend,
            success: function(ret) {
                console.log("Wysyłka się powiodła, success message");
                $("#success-msg").text("Your message has been sent. We will be in touch soon!");
            },
            error : function(error) {
                console.log("Wysyłka się NIE powiodła, error message");
                $("#error-msg").text("Error. Your message was not sent. Please try again.");
            },
            complete: function() {
            }
        });
    }
})

});
