'use strict';

// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements
    const imageButton = document.getElementById('imageButton');
    const diceImage = document.getElementById('diceImage');

    // Function to get a random integer within a range
    const getRandomIntInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to simulate dice roll with animation
    const rollDice = () => {
        // Add shake class to trigger animation
        diceImage.classList.add('shake');

        // Set timeout to remove shake class and update image source
        setTimeout(() => {
            // Get a random number between 1 and 6
            const randomNumber = getRandomIntInRange(1, 6);

            // Set new image source
            diceImage.src = `./images/${randomNumber}.png`;

            // Remove shake class to reset animation
            diceImage.classList.remove('shake');
        }, 500); // Duration of the shake animation
    }

    // Add a click event listener to the button element
    imageButton.addEventListener('click', rollDice);
});
