export const imageToTensor = (image) => {
	return tf.browser.fromPixels(image, 1).reshape([1, 28, 28, 1]);
};
