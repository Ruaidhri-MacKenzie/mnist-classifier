const modelStatus = document.getElementById("model-status");
const predictDisplay = document.getElementById("predict-display");

export const setModelStatus = (status) => {
	modelStatus.innerText = `Model Status: ${status}`;
};

export const displayPrediction = (prediction) => {
	predictDisplay.innerText = `Prediction: ${prediction}`;
};
