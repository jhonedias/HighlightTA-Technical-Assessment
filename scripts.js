const countriesCodes = {
    '' : '',
    'br' : '+55',
    'ca' : '+1',
    'uk' : '+44'
};
$('#selectCountry').on('change', function(){
    let selectedCode = countriesCodes[$(this).val()];
    $('#registerPhoneCode').val(selectedCode);
});

$("#registerForm").submit(function (e) { 
    e.preventDefault();

    let email = $("#registerEmail").val().trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        $("#emailError").removeClass("d-none");
        return;
    } else {
        $("#emailError").addClass("d-none");
    }
});
