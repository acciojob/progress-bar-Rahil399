//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressLine = document.querySelector('.progress-line');

let currentStep = 1; // Track the current active circle

// Function to update the progress bar
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Adjust progress line width
    progressLine.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

    // Enable/Disable buttons
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}

// Next button click event
nextBtn.addEventListener('click', () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});
