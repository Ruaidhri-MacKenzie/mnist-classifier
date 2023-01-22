import { imageToTensor } from "./utils.js";

export const loadModel = async (filename) => {
	const model = await tf.loadLayersModel(`./model/${filename}`);
	model.summary();
	return model;
};

export const predict = (model, image) => {
	return tf.tidy(() => {
		const xs = imageToTensor(image);
		const probabilities = model.predict(xs);
		const prediction = tf.argMax(probabilities.dataSync()).dataSync();
		return prediction;
	});
};
