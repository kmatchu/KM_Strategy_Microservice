
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
// Cors implementation based on tutorial accessed 5/20/24 at:
// https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

app.get("/strategy", (req,res) => {
    // Not async because just sending a simple string response
    console.log("Received a Request")
    const risk_tolerance = req.query.risk_tolerance

    if (risk_tolerance == "High"){
        res.send("Foreign Markets offers high returns if you are ok with high risk.")
        console.log("Sent High Response.")
    } else if (risk_tolerance == "Medium"){
        res.send("Real Estate indexes offer a nice balance of returns for Medium risk tolerance.")
        console.log("Sent Medium Response.")
    } else if (risk_tolerance == "Low"){
        res.send("ETFs spread your investment wide, offering an ok return while safe for Low risk tolerance.")
        console.log("Sent Low Response.")
    } else {
        res.send("Error: Must send 'Low', 'Medium', or 'High'.")
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});