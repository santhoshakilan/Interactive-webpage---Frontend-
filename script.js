// Task 4: Change Background Color
document.getElementById("colorBtn").onclick = () => {
   document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
};

// Task 5: Fetch API Data
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => {
    document.getElementById("apiData").innerHTML = `
<h4>${data.title}</h4>
<p>${data.body}</p>
    `;
})

.catch(err => {
    document.getElementById("apiData").innerText = "Error loading API data.";
    console.error(err);
});

// Task 6: Form Validation
document.getElementById("contactForm").onsubmit = (e) => {
e.preventDefault();

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const msg = document.getElementById("formMessage");

if (!email || !password) {
    msg.textContent = "Please fill all fields!";
    msg.style.color = "red";
} else if (!email.includes("@")) {
    msg.textContent = "Enter a valid email!";
    msg.style.color = "red";
} else {
    msg.innerHTML = "Form submitted successfully <i class='fa-regular fa-circle-check'></i>";
    msg.style.color = "green";
}
};