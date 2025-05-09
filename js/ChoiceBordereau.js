$('.choix_remiseBord').change(function () {
    var choix = $('.choix_remiseBord').val();
    if (choix == 0) {
        $('#Banque').removeClass('hidden');
        $('#RespReg').addClass('hidden');
        $('#EnvoyerBordereau').removeClass('hidden');
    } else if (choix == 1) {
        $('#Banque').addClass('hidden');
        $('#RespReg').removeClass('hidden');
        $('#EnvoyerBordereau').removeClass('hidden');
    } else {
        $('#Banque').addClass('hidden');
        $('#RespReg').addClass('hidden');
        $('#EnvoyerBordereau').addClass('hidden');
    }
});



function InfoImprimerBord(data) {

    $('#DestinataireBordereau').modal();

    $("#EnvoyerBordereau").click(function () {

        var infoDest = "";
        if ($('#choix_remiseBord').find("option:selected").val() == 0) {
            infoDest = $("#commentaireBanque").val();
        } else {
            infoDest = $('#RegionalName').find("option:selected").val();
        }
        $.ajax({
            type: "get",
            url: '/GestionFactures/DestinationBordereau?cbmarq=' + data +
                                    "&&TypeDestinataire=" + $('#choix_remiseBord').find("option:selected").val()
                                    + "&&V_InfoDestinataire=" + infoDest, // we are calling json method
            dataType: 'json',
            success: function (result) {

                //   window.location =("/GestionFactures/ImprimerBordereauVersement/"+data);



                window.location = ("/GestionFactures/ListeVersement/");

                var redirectWindow = window.open('/GestionFactures/ImprimerBordereauVersement/' + data, '_blank');
                redirectWindow.location;
            }
        });
    });
}