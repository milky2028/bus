import * as functions from 'firebase-functions';
import axios from 'axios';

export const getBusPrediction = functions.https.onRequest(async (request, response) => {
    try {
        const url = 'http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=hx2E2juxTZSkkUqukqgn9h52J&stpid=6337&rt=60&format=json';
        const prediction = await axios.get(url);
        return response.status(200).send(prediction.data);
    } catch (e) {
        console.error(e);
        return response.status(400).send();
    }
});
