require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

const WHATSAPP_API_URL = "https://graph.facebook.com/v18.0/564537390075776/messages";
const ACCESS_TOKEN = "EAAPFK2jN1vwBO8QVrBIZAOYykZB3mNdP8cyesBUTHaPZCyhudZCI8Jtjw56cwvMYXtDVgr9Et7DK5QJaaaHS7h3pp6XJvEbPXBcyFnh5Q46mvwZAn9j5tA8EcC9AeJJWq2ZBVPUGX7XhY02Pt4euDeDV2OjmdIXxAZCPtaGe4C48iaR1jL4H3Tu9O7qwH4akmjqaAeRErPwLvZBqgv0XV6IEtobIhpZAqUg4Ov5ZCD";

app.post("/send-message", async (req, res) => {
    const { phoneNumber, userName } = req.body;

    try {
        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: "whatsapp",
                to: phoneNumber,
                type: "template",
                template: {
                    name: "nniit_insights",
                    language: { code: "en_US" },
                    components: [
                        {
                            type: "body",
                            parameters: [{ type: "text", text: userName }]
                        }
                    ]
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({ success: true, response: response.data });
    } catch (error) {
        console.error("Error sending WhatsApp message:", error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
