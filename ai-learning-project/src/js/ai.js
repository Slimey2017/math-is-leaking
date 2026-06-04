class AI {
    constructor() {
        this.model = new NeuralNetwork(); // Initialize the neural network model
    }

    train(data) {
        data.forEach(item => {
            const input = item.input;
            const output = item.output;
            this.model.train([{ input, output }]); // Train the model with input-output pairs
        });
        console.log("Training completed with data:", data);
    }

    predict(input) {
        const output = this.model.feedForward(input); // Get prediction from the model
        console.log("Making prediction for input:", input, "Output:", output);
        return output;
    }
}

export default AI;
