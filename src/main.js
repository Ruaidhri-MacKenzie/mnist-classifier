import { setModelStatus, displayPrediction } from "./ui.js";
import { loadModel, predict } from "./model.js";

const imageInput = document.getElementById("image-input");
const imageDisplay = document.getElementById("image-display");
const predictInput = document.getElementById("predict-input");

// Load Model
setModelStatus("loading");
const model = await loadModel("mnist-classifier.json");
setModelStatus("ready");

const onUploadImage = (event) => {
	imageDisplay.src = URL.createObjectURL(event.target.files[0]);
	displayPrediction("_");
};

const onPredict = (event) => {
	setModelStatus("predicting");
	const prediction = predict(model, imageDisplay);
	displayPrediction(prediction);
	setModelStatus("ready");
};

imageInput.value = "";
imageInput.addEventListener("change", onUploadImage);
predictInput.addEventListener("click", onPredict);
