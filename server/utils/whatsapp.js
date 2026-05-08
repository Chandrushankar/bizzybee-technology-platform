import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const sendWhatsAppMessage = async (phone, message) => {
  try {
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    if (!phoneNumberId || !accessToken || phoneNumberId === 'your_phone_number_id') {
      console.warn("WhatsApp Cloud API not configured. Mocking message send.");
      console.log(`[Mock WhatsApp] To: ${phone} | Message: ${message}`);
      return true;
    }

    const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;

    const response = await axios.post(
      url,
      {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("WhatsApp message sent:", response.data);
    return true;
  } catch (error) {
    console.error("WhatsApp Send Error:", error.response?.data || error.message);
    return false;
  }
};
