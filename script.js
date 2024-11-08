// Update Date Banner on page load
window.onload = function updateDate() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById('date-banner').innerHTML = `Today is: ${day}, ${month} ${date}, ${year}`;
};

// Update salary display dynamically
document.getElementById('salary').addEventListener('input', function () {
    const salaryValue = this.value;
    document.getElementById('salaryDisplay').innerText = '$' + salaryValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// Review form data before submission
document.getElementById('reviewButton').addEventListener('click', showReview);

function showReview() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const ssn = document.getElementById('ssn').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const diseases = Array.from(document.querySelectorAll('input[name="disease"]:checked')).map(cb => cb.value).join(', ') || 'None';
    const vaccinationStatus = document.querySelector('input[name="vaccinationStatus"]:checked')?.value || 'Not specified';
    const salary = document.getElementById('salary').value;
    const formattedSalary = '$' + salary.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const email = document.getElementById('email').value;
    const symptoms = document.getElementById('symptoms').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('rePassword').value;

    // Validate password match
    if (password !== rePassword) {
        alert("Passwords do not match. Please check your entries.");
        return;
    }

    // Populate the review section
    document.getElementById('reviewFirstName').innerText = firstName;
    document.getElementById('reviewLastName').innerText = lastName;
    document.getElementById('reviewDOB').innerText = dob;
    document.getElementById('reviewSSN').innerText = ssn;
    document.getElementById('reviewAddress1').innerText = address1;
    document.getElementById('reviewAddress2').innerText = address2;
    document.getElementById('reviewCity').innerText = city;
    document.getElementById('reviewState').innerText = state;
    document.getElementById('reviewZip').innerText = zip;
    document.getElementById('reviewDisease').innerText = diseases;
    document.getElementById('reviewVaccinationStatus').innerText = vaccinationStatus;
    document.getElementById('reviewSalary').innerText = formattedSalary;
    document.getElementById('reviewEmail').innerText = email;
    document.getElementById('reviewSymptoms').innerText = symptoms;
    document.getElementById('reviewUsername').innerText = username;

    document.getElementById('reviewSection').style.display = 'block';
}
//submission 
function submitForm() {
    document.getElementById('patientForm').submit(); // Programmatically submit the form
}