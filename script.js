function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateAge() {
    const birthYear = prompt("Enter your birth year:");
    if (birthYear) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        document.getElementById('result').value = `Your age is: ${age}`;
    }
}

function deleteAll() {
    clearResult(); // Reuse the existing clearResult function
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Add event listeners for the new buttons
document.getElementById('calculate-age').addEventListener('click', calculateAge);
document.getElementById('delete-all').addEventListener('click', deleteAll);
