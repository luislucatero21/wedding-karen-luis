
var qrCodeContainer = document.getElementById('qr-code');

var qrCode = new QRCode(qrCodeContainer, {
  text: "http://www.google.com",
  width: 300,
  height: 300
});

qrCodeContainer.style.display = 'block';
