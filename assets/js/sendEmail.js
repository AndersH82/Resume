function sendMail(contactForm) {
    emailjs.send("gmail", "Anders Holst", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "resume_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}