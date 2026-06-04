document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Learning Project Initialized');

    const trainButton = document.getElementById('train-button');
    trainButton.addEventListener('click', () => {
        console.log('Training started...');
        fetch('data/trainingData.json')
            .then(response => response.json())
            .then(data => {
                const ai = new AI();
                ai.train(data.trainingData);
                console.log('Training completed.');
            })
            .catch(error => console.error('Error loading training data:', error));
    });

    const predictButton = document.getElementById('predict-button');
    predictButton.addEventListener('click', () => {
        const inputField = document.getElementById('input-field');
        const input = JSON.parse(inputField.value);
        const ai = new AI();
        const prediction = ai.predict(input);
        console.log('Prediction:', prediction);
    });
});
