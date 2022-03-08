import * as functions from "firebase-functions";
import axios from "axios";

export const getBusPrediction = functions.https.onRequest(
  async (_request, response) => {
    try {
      response.set("Access-Control-Allow-Origin", "*");
      response.set("Access-Control-Allow-Methods", "GET");
      response.set("Access-Control-Allow-Headers", "Content-Type");
      const url =
        "http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=hx2E2juxTZSkkUqukqgn9h52J&stpid=6337&rt=60&format=json";
      const prediction = await axios.get(url);

      response.status(200).send(prediction.data);
    } catch (e) {
      console.error(e);
      response.status(400).send();
    }
  }
);
