document.addEventListener("DOMContentLoaded", () => {
  // Format the phone number (remove spaces, make sure it includes country code)
  const phoneNumber = "07048683054";
  // Assuming Nigerian number (+234), adjust if different country code
  const formattedNumber = phoneNumber.startsWith("0")
    ? "234" + phoneNumber.substring(1)
    : phoneNumber;

  // Create WhatsApp link
  const whatsappLink = `https://wa.me/${formattedNumber}`;

  // Generate QR code
  new QRCode(document.getElementById("qrcode"), {
    text: whatsappLink,
    width: 200,
    height: 200,
    colorDark: "#128C7E", // WhatsApp green
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
