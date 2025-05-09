var oTable, oTable2, oTable3, oTable4, oTable5, EventFired;
$(document).ready(function () {
    $('#min').attr('disabled', 'disabled');
    $('#max').attr('disabled', 'disabled');
    $("select.FiltreListe").change(function () {

        EventFired = false;
        var IdArticle = $("#ListArticle option:selected").map(function () { return this.value }).get()

        var NumSerie = "";

        NumSerie = $("#ListSerie option:selected").map(function () { return this.value }).get()
        if (NumSerie == "") {
            NumSerie = "";
            EventFired = false;
        }
        else {
            var selected = $("#ListSerie option:selected").map(function () { return this.value }).get();

            NumSerie = selected;
            EventFired = true;

        }



        $.ajax({
            url: '/InterogeStock/GetArticleInformationByReference?RefArticle=' + IdArticle + "&NumSerie=" + NumSerie,

            type: "get",
            dataType: "json",
            success: function (data) {

                $('#min').removeAttr('disabled');
                $('#max').removeAttr('disabled');
                $("#min").datepicker("setDate", "");
                $("#max").datepicker("setDate", "");
                $.each(data.Serie, function () {
                    $("#ListSerie").append('<option value="' + this + '">' + this + '</option>');
                });
                SetData(data);

            }
        });
    });
});
function SetData(Globaldata) {

    oTable = $('#StockTab').DataTable({
        responsive: true,
        destroy: true,
        "columns": [
            { "data": "Serialise", "defaultContent": "" },
            { "data": "DE_Intitule", "defaultContent": "" },
            { "data": "Aref", "defaultContent": "" },
            { "data": "Designation", "defaultContent": "" },
            { "data": "StockPermanant", "defaultContent": "" },
            { "data": "StockReserve", "defaultContent": "" },
            { "data": "StockCommande", "defaultContent": "" }
        ],
        "columnDefs": [
        ]
    });
    $('#StockTab').dataTable().fnClearTable();
    $('#StockTab').dataTable().fnAddData(Globaldata.data.StockDepotsViewModels);


    oTable2 = $('#MouvementVenteTab').DataTable({
        responsive: true,
        destroy: true,
        "columns": [
            { "data": "TypeDocument", "defaultContent": "" },
            { "data": "Piece", "defaultContent": "" },
            { "data": "Date", "defaultContent": " " },
            { "data": "DepotName", "defaultContent": "" },
            { "data": "RéferenceAbonnement", "defaultContent": "" },
            { "data": "ClientName", "defaultContent": "" },
            { "data": "Quantite", "defaultContent": "" },
            { "data": "NumSeries", "defaultContent": "" },
        ],
        "columnDefs": [
            {
                targets: 2,
                render: function (data) {
                    if (data != undefined) {
                        return moment(data).format('MM/DD/YYYY');
                    }
                }
            },
            {
                targets: 7,
                render: function (data) {
                    var ListSerie = "";
                    if (data != undefined) {
                        for (var i = 0; i < data.length; i++) {
                            ListSerie += "<p>" + data[i] + "</p>"
                        }
                    }
                    return ListSerie;
                }
            }]
    });
    $('#MouvementVenteTab').dataTable().fnClearTable();
    $('#MouvementVenteTab').dataTable().fnAddData(Globaldata.data.MouvementVente);

    oTable3 = $('#MouvementAchatTab').DataTable({
        responsive: true,
        destroy: true,
        "columns": [
            { "data": "TypeDocument", "defaultContent": "" },
            { "data": "Piece", "defaultContent": "" },
            { "data": "Date", "defaultContent": " " },
            { "data": "DepotName", "defaultContent": "" },
            { "data": "RéferenceAbonnement", "defaultContent": "" },
            { "data": "ClientName", "defaultContent": "" },
             { "data": "Quantite", "defaultContent": "" },
            { "data": "NumSeries", "defaultContent": "" },
        ],
        "columnDefs": [{
            targets: 2,
            render: function (data) {

                if (data != undefined) {
                    return moment(data).format('MM/DD/YYYY');
                }
            },
            targets: 7,
            render: function (data) {

                var ListSerie = "";
                if (data != undefined) {
                    for (var i = 0; i < data.length; i++) {
                        ListSerie += "<p>" + data[i] + "</p>"
                    }
                }
                return ListSerie;
            }
        }]
    });
    $('#MouvementAchatTab').dataTable().fnClearTable();
    $('#MouvementAchatTab').dataTable().fnAddData(Globaldata.data.MouvementAchat);

    oTable4 = $('#DemandeApproTab').DataTable({
        responsive: true,
        destroy: true,

        "columns": [
            { "data": "ApproStatut", "defaultContent": "" },
            { "data": "Recepteur", "defaultContent": "" },
            { "data": "ApproDate", "defaultContent": "" },
            { "data": "Emeteur", "defaultContent": "" },
            { "data": "ApproPiece", "defaultContent": "" },
            { "data": "Quantite", "defaultContent": "" },
            { "data": "NumSeries", "defaultContent": "" },

        ],
        "columnDefs":
        [
            {
                targets: 2, render: function (data) {
                    if (data != undefined) {
                        return moment(data).format('MM/DD/YYYY');
                    }
                }
            },
            {
                targets: 6,
                "width": "6%",
                render: function (data, type, row) {
                    if (!EventFired) {
                        var obj = JSON.stringify(row.NumSeries);
                        return "<button type='button' class='btn btn-white btn-sm' onclick='GetSerie(" + obj + ")'><i class='fa fa-binoculars'>Détails</i></button>";
                    }

                }
            }
        ]

    });
    $('#DemandeApproTab').dataTable().fnClearTable();
    $('#DemandeApproTab').dataTable().fnAddData(Globaldata.data.DemandeApprosViewModels);

    oTable5 = $('#MouvementStockTab').DataTable({
        responsive: true,
        destroy: true,

        "columns": [
            { "data": "DocumentType", "defaultContent": "" },
            { "data": "Piece", "defaultContent": "" },
            { "data": "Date", "defaultContent": "" },
            { "data": "DepotName", "defaultContent": "" },
            { "data": "Quantite", "defaultContent": "" },
            { "data": "NumSeries", "defaultContent": "" },


        ],
        "columnDefs": [
            {
                targets: 2,
                render: function (data) {
                    if (data != undefined) {
                        return moment(data).format('MM/DD/YYYY');
                    }
                }
            },
            {
                targets: 5,
                render: function (data, type, row) {

                    if (!EventFired) {
                        var obj = JSON.stringify(row.NumSeries);
                        return "<button type='button' class='btn btn-white btn-sm' onclick='GetSerie(" + obj + ")'><i class='fa fa-binoculars'>Détails</i></button>";
                    }
                }

            }]

    });

    $('#MouvementStockTab').dataTable().fnClearTable();
    $('#MouvementStockTab').dataTable().fnAddData(Globaldata.data.MouvementTransferArticleViewModels);


    oTable6 = $('#DemandeTransfertTab').DataTable({
        responsive: true,
        destroy: true,
        order: true,
        "order": [[4, "desc"]],
        "columns": [
            { "data": "TRPiece", "defaultContent": "" },
            { "data": "DepotEmeteur", "defaultContent": "" },
            { "data": "Date", "defaultContent": "" },
            { "data": "DepotRecepteur", "defaultContent": "" },
            { "data": "Quantite", "defaultContent": "" },
           { "data": "NumSeries", "defaultContent": "" },

        ],
        "columnDefs": [
            {
                targets: 2,
                render: function (data) {
                    if (data != undefined) {
                        return moment(data).format('MM/DD/YYYY');
                    }
                }
            },
            {
                targets: 5,
                "width": "6%",
                render: function (data, type, row) {

                    if (!EventFired) {
                        var obj = JSON.stringify(row.NumSeries);
                        return "<button type='button' class='btn btn-white btn-sm' onclick='GetSerie(" + obj + ")'><i class='fa fa-binoculars'>Détails</i></button>";
                    }

                }
            }
        ]

    });
    $('#DemandeTransfertTab').dataTable().fnClearTable();
    $('#DemandeTransfertTab').dataTable().fnAddData(Globaldata.data.DemandeTransfertArticleViewModels);





}

function GetSerie(SerieData) {
    $("#ListSeries tbody tr").remove();

    for (var i = 0; i < SerieData.length; i++) {
        $('#ListSeries tbody').append('<tr><td>' + SerieData[i] + "</td></tr>");

    }


    $('#Serie').modal("show");
}

//$(document).ready(function () {
//    $("#CloseSerie").click(function () {
//        $('#ListSeries').dataTable().fnClearTable();
//    });
//});


function listedesArticlesTable(cbMarq) {
    //$(".chosen-select").chosen();

    $("#listeArticles").dataTable().fnDestroy();
    var oTable = $('#listeArticles').DataTable({
        "ajax": {
            "url": '/Interne/getlistedesSeries?cbMarq=' + cbMarq,
            "type": "get",
            "datatype": "json",
            "autoWidth": false

        },
        "columns": [

            { "data": "AR_Ref" },
            { "data": "AR_Desigh" },
            { "data": "LS_NoSerie" },
            { "data": "isReserved" },
        ],
        "columnDefs": [

            {

                targets: [3],
                render: function (data, type, row) {
                    if (data == 0) {
                        return 'Non Réservé';
                    }
                    else {
                        return 'Résérvé ';
                    }

                }
            }
        ]

    });




}

function DetailsArticle(cbMarq, suivi) {


    if (suivi == 1) {
        $('#selectArticle').modal();
        listedesArticlesTable(cbMarq);
    }
    else if (suivi == 2) {
        $("button[name='details']").attr("disabled", true);
    }
}
$(document).ready(function () {
    $("#min").datepicker({
        onSelect: function () {
            oTable2.draw();
            oTable3.draw();
            oTable4.draw();
            oTable5.draw();
            oTable6.draw();
        },
        changeMonth: true,
        changeYear: true
    });
    $("#max").datepicker({
        onSelect: function () {
            oTable2.draw();
            oTable3.draw();
            oTable4.draw();
            oTable5.draw();
            oTable6.draw();
        },
        changeMonth: true,
        changeYear: true

    });

    var TableAllowed = ["DemandeTransfertTab", "MouvementTransferTab", "DemandeApproTab", "BonSortieTab", "StockTab"];
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var set = settings.nTable;


            var min = $('#min').datepicker("getDate");
            var max = $('#max').datepicker("getDate");
            var startDate = new Date(data[2]);

            if (min == null && max == null) { return true; }
            if (min == null && startDate <= max) { return true; }
            if (max == null && startDate >= min) { return true; }
            if (startDate <= max && startDate >= min) { return true; }
            return false;


        });



    $('#min, #max').change(function () {
        oTable2.draw();
        oTable3.draw();
        oTable4.draw();
        oTable5.draw();
        oTable6.draw();
    });
});
function SerachByNumSerie() {


    var input, filter, table, tr, td, i;
    input = document.getElementById("searchBySerie");
    filter = input.value.toUpperCase();
    table = document.getElementById("ListSeries");
    tr = table.getElementsByTagName("tr");



    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("StockTab");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
