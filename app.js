const searchInput = document.getElementById('search');
const searchResultsDiv = document.getElementById('searchResults');
const addItemForm = document.getElementById('addItemForm');
const selectedItemIdInput = document.getElementById('selectedItemId');
const selectedItemNameInput = document.getElementById('selectedItemName');
const quantityInput = document.getElementById('quantity');
const cartTableBody = document.getElementById('cartBody');

const dataBarang = [
    { id: 'B001', nama: 'Barang 1', harga: 10 },
    { id: 'B002', nama: 'Barang 2', harga: 20 },
    { id: 'B003', nama: 'Barang 3', harga: 30 },
    // Tambahkan data barang sesuai kebutuhan
];

// Fungsi untuk merender hasil pencarian
function renderSearchResults(results) {
    searchResultsDiv.innerHTML = '';

    results.forEach(barang => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${barang.nama} - ${barang.harga}`;
        resultDiv.addEventListener('click', function() {
            fillAddForm(barang);
        });
        searchResultsDiv.appendChild(resultDiv);
    });
}

// Fungsi untuk mengisi form penambahan barang berdasarkan barang yang dipilih
function fillAddForm(selectedBarang) {
    selectedItemIdInput.value = selectedBarang.id;
    selectedItemNameInput.value = selectedBarang.nama;
    quantityInput.value = 1;
    addItemForm.style.display = 'block';
}

// Fungsi untuk menambahkan barang ke dalam keranjang
function addToCart(event) {
    event.preventDefault();

    const id = selectedItemIdInput.value;
    const nama = selectedItemNameInput.value;
    const kuantitas = parseInt(quantityInput.value, 10);
    const harga = findItemById(id).harga;
    const totalHarga = kuantitas * harga;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nama}</td>
        <td>${kuantitas}</td>
        <td>${totalHarga}</td>
    `;

    cartTableBody.appendChild(newRow);

    // Reset form dan sembunyikan
    addItemForm.reset();
    addItemForm.style.display = 'none';
}

// Fungsi untuk mencari item berdasarkan ID
function findItemById(id) {
    return dataBarang.find(item => item.id === id);
}

// Event listener untuk input pencarian
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = dataBarang.filter(barang => barang.nama.toLowerCase().includes(searchTerm));
    renderSearchResults(searchResults);
});

// Event listener untuk form penambahan barang
addItemForm.addEventListener('submit', addToCart);
