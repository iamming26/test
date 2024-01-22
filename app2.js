const dataBarang = [
    { code_material: "89900000", barcode: "8992931009547", merk: "Tessa", code_desc: "TOT04", item_desc: "Toilet 110g 2p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900002", barcode: "8992931019522", merk: "Dinasty", code_desc: "TOD02", item_desc: "Toilet 180g 2p ", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900003", barcode: "8992931000032", merk: "Dinasty", code_desc: "TOD02/MU", item_desc: "Toilet 180g 2p banded MU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900006", barcode: "8992931029521", merk: "Multi", code_desc: "TOM02GR", item_desc: "Tissue Multi GT Toilet 200s 2p - TOM02GR", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900007", barcode: "8992931001534", merk: "Multi", code_desc: "TOM02BD", item_desc: "Tissue Multi GT Toilet 200s 2p MU - TOM02BD", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900016", barcode: "8992931009165", merk: "Tessa", code_desc: "PB16", item_desc: "Toilet 300s x 8R 3p", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "-" },
    { code_material: "89900018", barcode: "-", merk: "Tessa", code_desc: "PB23", item_desc: "Tissu Tessa Toilet 300s 3p 12 R - PB23", in_ct: "-", cubication: "-", disc: "0%", note_disc: "BATAM & KEPRI 20%", note: "-" },
    { code_material: "89900022", barcode: "8992931009103", merk: "Multi", code_desc: "PB10", item_desc: "Toilet 220s x 10R 2p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900031", barcode: "8992931 005020", merk: "Tessa", code_desc: "TP02", item_desc: "Facial SP 260s 2p", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900036", barcode: "8992931005235", merk: "Tessa", code_desc: "TP06 PA", item_desc: "Facial SP 200s 2p PA", in_ct: "-", cubication: "-", disc: "15%", note_disc: "PAPUA 5%", note: "-" },
    { code_material: "89900038", barcode: "8992931005228", merk: "Tessa", code_desc: "TP22", item_desc: "GT Facial SP 250s 2p", in_ct: "-", cubication: "-", disc: "15%", note_disc: "PAPUA 5%", note: "-" },
    { code_material: "89900039", barcode: "8992931025011", merk: "Multi", code_desc: "MP01", item_desc: "Facial SP 260s 2p", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900040", barcode: "8992931000407", merk: "Multi", code_desc: "MP01/MU", item_desc: "Facial SP 260s 2p Banded MU", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900048", barcode: "8992931005112", merk: "Tessa", code_desc: "TP11", item_desc: "GT Char Facial Travel Pack 50s 2p", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "00500GT23120" },
    { code_material: "89900049", barcode: "8992931005181", merk: "Tessa", code_desc: "TP18", item_desc: "Facial Travel Pack 50s 2p", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900051", barcode: "NON BARCODE", merk: "Tessa", code_desc: "TP19PA", item_desc: "GT Facial Travel Pack 50s 2p PA", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900052", barcode: "8992931005204", merk: "Tessa", code_desc: "TP20", item_desc: "MS Facial Travel Pack 50s 3p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900055", barcode: "8992931025042", merk: "Multi", code_desc: "MP04", item_desc: "Facial RF 600g 2p", in_ct: "-", cubication: "-", disc: "5%", note_disc: "-", note: "-" },
    { code_material: "89900056", barcode: "8992931025080", merk: "Multi", code_desc: "MP08", item_desc: "Facial RF 1000g 2p", in_ct: "-", cubication: "-", disc: "17,5%", note_disc: "PAPUA 5%", note: "00500AL23120" },
    { code_material: "89900067", barcode: "8992931000681", merk: "Tessa", code_desc: "TM05", item_desc: "Facial BX 120s 2p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900068", barcode: "8992931002050", merk: "Tessa", code_desc: "TM05/MU", item_desc: "Facial BX 120s 2p Banded MU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900070", barcode: "8992931006256", merk: "Tessa", code_desc: "TPC25", item_desc: "Char Facial HKSTD 10s x 6packs 3p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900071", barcode: "8992931006256", merk: "Tessa", code_desc: "TPC25MU", item_desc: "Char Facial HKSTD 10s x 6packs 3pMU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900072", barcode: "8992931007079", merk: "Tessa", code_desc: "TN07", item_desc: "Napkin Lunch 50s 1p TN-07", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900073", barcode: "8992931000735", merk: "Tessa", code_desc: "TN07/MU", item_desc: "Napkin Lunch 50s 1p- TN07 Banded MU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900074", barcode: "8992931007086", merk: "Tessa", code_desc: "TN08", item_desc: "Tissue Tessa NT Nap Lunch 50s 1p UB - TN08", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900075", barcode: "8992931027015", merk: "Multi", code_desc: "MN01", item_desc: "Napkin Lunch 100s 1p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900076", barcode: "8992931000766", merk: "Multi", code_desc: "MN01MU", item_desc: "Napkin Lunch 100s 1p Banded MU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900090", barcode: "Private Label", merk: "-", code_desc: "KF73", item_desc: "Hand Towel Unbleach PWIU", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900141", barcode: "8992931007109", merk: "Tessa", code_desc: "TN10PA", item_desc: "Napkin Dinner 50s 2p PA-TN 10PA", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900143", barcode: "8992931021211", merk: "Multi", code_desc: "MHT150-020PA", item_desc: "Eco Towel Interfold 150s 2p", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "-" },
    { code_material: "89900159", barcode: "8992931025202", merk: "Multi", code_desc: "MPH200-48MU", item_desc: "Eco Facial PU 200s 2pMU", in_ct: "-", cubication: "-", disc: "10%", note_disc: "-", note: "00500GT23120" },
    { code_material: "89900160", barcode: "8992931005242", merk: "Tessa", code_desc: "TP02/MU", item_desc: "Facial SP 260s 2p Banded MU", in_ct: "-", cubication: "-", disc: "10%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900183", barcode: "8992931005105", merk: "Tessa", code_desc: "TP10", item_desc: "Tissue Tessa MS Facial SP150s 3p", in_ct: "-", cubication: "-", disc: "0%", note_disc: "-", note: "-" },
    { code_material: "89900184", barcode: "8992931001848", merk: "Tessa", code_desc: "TTP02", item_desc: "NT Towel Roll 100 s x 24R 2p-TTP02", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "-" },
    { code_material: "89900198", barcode: "8992931001985", merk: "Tessa", code_desc: "TP07", item_desc: "Tissue Tessa NT Facial SP 120s 3p - TP07 ", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900218", barcode: "8992931002180", merk: "Tessa", code_desc: "TTP03", item_desc: "Tissue Tessa NT Towel Roll 100s 2R 2p – TTP03", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900221", barcode: "8992931000476", merk: "Tessa", code_desc: "TP09MUC", item_desc: "Facial Travel Pack 50s 3pMU-TP-09MU", in_ct: "-", cubication: "-", disc: "15%", note_disc: "-", note: "00500AL23120" },
    { code_material: "89900226", barcode: "-", merk: "-", code_desc: "PB08", item_desc: "-", in_ct: "-", cubication: "-", disc: "20%", note_disc: "-", note: "00500AL23120" },

    // Tambahkan data barang sesuai kebutuhan
];

//Fungsi menampilkan data dihalaman master data
function showMasterData() {
    var tbody = document.getElementById('tableMasterData').getElementsByTagName('tbody')[0];

    for (var i = 0; i < dataBarang.length; i++) {
        var row = tbody.insertRow(i);

        var cellCodeMaterial = row.insertCell(0);
        var cellBarcode = row.insertCell(1);
        var cellMerk = row.insertCell(2);
        var cellCodeDesc = row.insertCell(3);
        var cellItemDesc = row.insertCell(4);
        var cellInCT = row.insertCell(5);
        var cellCubication = row.insertCell(6);
        var cellDisc = row.insertCell(7);
        var cellNoteDisc = row.insertCell(8);
        var cellNote = row.insertCell(9);

        cellCodeMaterial.innerHTML = dataBarang[i].code_material;
        cellBarcode.innerHTML = dataBarang[i].barcode;
        cellMerk.innerHTML = dataBarang[i].merk;
        cellCodeDesc.innerHTML = dataBarang[i].code_desc;
        cellItemDesc.innerHTML = dataBarang[i].item_desc;
        cellInCT.innerHTML = dataBarang[i].in_ct;
        cellCubication.innerHTML = dataBarang[i].cubication;
        cellDisc.innerHTML = dataBarang[i].disc;
        cellNoteDisc.innerHTML = dataBarang[i].note_disc;
        cellNote.innerHTML = dataBarang[i].note;
    }
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
showMasterData();

// Fungsi untuk melakukan pencarian berdasarkan input pengguna
function searchData() {
    var input, filter, table, tbody, tr, td, i, j, txtValue, highlightedText;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableMasterData");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        var isMatch = false;

        for (j = 0; j < td.length; j++) {
            txtValue = td[j].textContent || td[j].innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                isMatch = true;
                highlightedText = highlightMatchingText(txtValue, filter);
                td[j].innerHTML = highlightedText;
            } else {
                td[j].innerHTML = txtValue;
            }
        }

        // Tampilkan baris yang sesuai dengan input dan sorotan (highlight)
        if (isMatch) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

// Fungsi untuk menyorot karakter yang sesuai dengan inputan
function highlightMatchingText(text, filter) {
    var pattern = new RegExp(filter, "ig");
    return text.replace(pattern, function(match) {
        return "<span class='highlight'>" + match + "</span>";
    });
}