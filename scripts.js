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
