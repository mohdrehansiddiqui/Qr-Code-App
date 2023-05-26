let search = document.getElementById('search');
let genbtn = document.getElementById('qr-gen');
let qrImage = document.getElementById('qrImage');

search.addEventListener('submit', () => {
generateQRCode();
});

genbtn.addEventListener('click', (event) => {
event.preventDefault();
generateQRCode();
});

function generateQRCode() {
let searchText = search.value;
qrImage.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${searchText}" alt="QR Code">`;
qrImage.classList.add("qrnew")
}