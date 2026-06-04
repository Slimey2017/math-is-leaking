class NeuralNetwork {
    constructor() {
        this.layers = [];
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    feedForward(input) {
        let output = input;
        for (const layer of this.layers) {
            output = layer.activate(output);
        }
        return output;
    }

    train(trainingData) {
        // Implement training logic here
        // Adjust weights based on training data
    }
}

export default NeuralNetwork;
