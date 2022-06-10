
const subject = document.querySelector("#Subject");
const mentor = document.querySelector("#Mentor");

const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");

const prog1 = document.querySelector("#prog1");
const prog2 = document.querySelector("#prog2");
const prog3 = document.querySelector("#prog3");
const data = [
    {
        name: "Rod Knee",
        Subject: "Engineering",
        KeySpecialties: "Computer Science",
        YearsProfessional: "5",
        YearsTutoring: "1",
        Rating: "4.9",
    },
    {
        name: "Rita Book",
        Subject: "Engineering",
        KeySpecialties: "Computer Science",
        YearsProfessional: "3",
        YearsTutoring: "1",
        Rating: "4.6",
    },
    {
        name: "Joe Awl",
        Subject: "Engineering",
        KeySpecialties: "Object oriented programming",
        YearsProfessional: "4",
        YearsTutoring: "2",
        Rating: "4.7",
    },
    {
        name: "Johnny Amber",
        Subject: "Engineering",
        KeySpecialties: "Chemical engineering",
        YearsProfessional: "5",
        YearsTutoring: "1",
        Rating: "4.3",
    },
    {
        name: "Deffy Amber",
        Subject: "Business",
        KeySpecialties: "Finance",
        YearsProfessional: "12",
        YearsTutoring: "3",
        Rating: "5",
    },
    {
        name: "Aninta Letterback",
        Subject: "Business",
        KeySpecialties: "Accounting",
        YearsProfessional: "4",
        YearsTutoring: "3",
        Rating: "4.1",
    },
    {
        name: "Audie Yose",
        Subject: "Business",
        KeySpecialties: "Management",
        YearsProfessional: "24",
        YearsTutoring: "12",
        Rating: "4.9",
    },
    {
        name: "Maddy Scope",
        Subject: "Business",
        KeySpecialties: "Finance",
        YearsProfessional: "4",
        YearsTutoring: "7",
        Rating: "4.4",
    },
    {
        name: "Peter File",
        Subject: "Music",
        KeySpecialties: "Guitar",
        YearsProfessional: "4",
        YearsTutoring: "7",
        Rating: "5",
    },
    {
        name: "Col Fays",
        Subject: "Music",
        KeySpecialties: "Piano",
        YearsProfessional: "12",
        YearsTutoring: "2",
        Rating: "4.3",
    },
    {
        name: "Will Byers",
        Subject: "Music",
        KeySpecialties: "Banjo & Beatboxing",
        YearsProfessional: "42",
        YearsTutoring: "40",
        Rating: "0.2",
    },
    {
        name: "Ayman Madeen",
        Subject: "Music",
        KeySpecialties: "Drums",
        YearsProfessional: "25",
        YearsTutoring: "1",
        Rating: "4.6",
    },

    {
        name: "Rod Knee",
        Subject: "Other",
        KeySpecialties: "Biology",
        YearsProfessional: "5",
        YearsTutoring: "2",
        Rating: "4.1",
    },
    {
        name: "Greg Aris",
        Subject: "Other",
        KeySpecialties: "Technical writing",
        YearsProfessional: "10",
        YearsTutoring: "4",
        Rating: "4.5",
    },
    {
        name: "Nasim Maner",
        Subject: "Other",
        KeySpecialties: "History",
        YearsProfessional: "30",
        YearsTutoring: "4",
        Rating: "3.9",
    },
    {
        name: "Jessica Campbell",
        Subject: "Other",
        KeySpecialties: "Social Sciences",
        YearsProfessional: "22",
        YearsTutoring: "12",
        Rating: "3.7",
    },
];
form2.style.display = "none";
form3.style.display = "none";

prog2.style.display = "none";
prog3.style.display = "none";


let formData = {
    type: "",
    subject: "",
    mentor: "",
    startTime: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
};
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let bad = "Select an option";
    formData.type = form1.elements["planType"].value;
    formData.subject = form1.elements["Subject"].value;
    formData.mentor = form1.elements["Mentor"].value;
    formData.startTime = form1.elements["startTime"].value;

    let success = true;
    if (formData.type === bad) {
        alert("Select a plan.");
        success = false;
    }
    if (formData.subject === bad) {
        alert("Select a subject.");
        success = false;
    }
    if (formData.mentor === bad) {
        alert("Select a mentor.");
        success = false;
    }
    if (
        formData.startTime.charAt(12) == "0" &&
        formData.startTime.charAt(11) == "0"
    ) {
        alert("Select a proper time");
        success = false;
    }
    if (success === true) {
        form1.style.display = "none";
        prog1.style.display = "none";

        prog2.style.display = "";
        form2.style.display = "block";
    }
});
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let bad = "";
    formData.firstName = form2.elements["firstName"].value;
    formData.lastName = form2.elements["lastName"].value;
    formData.email = form2.elements["email"].value;
    formData.phoneNumber = form2.elements["phone"].value;
    console.log(formData.phoneNumber - 1);
    let success = true;
    if (formData.firstName === bad) {
        alert("Enter a first name.");
        success = false;
    }
    if (formData.lastName === bad) {
        alert("Enter a last name.");
        success = false;
    }
    if (formData.email === bad) {
        alert("Enter an email.");
        success = false;
    }
    if (phoneNumberValidator(formData.phoneNumber) == false) {
        alert("Enter a valid phone number.");
        success = false;
    }

    if (success === true) {
        form2.style.display = "none";
        prog2.style.display = "none";

        prog3.style.display = "";
        form3.style.display = "block";

        grandFinal();
    }
});
form3.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.replace("index.html");
});


subject.addEventListener(
    "change",
    function () {
        mentorListUpdater(this.value);
    },
    false
);

function phoneNumberValidator(number) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(number);
}
function removeOptions(selectElement) {
    var i,
        L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}
function mentorListUpdater(selectedSubject) {
    removeOptions(mentor);
    mentor.options.add(new Option("Select an option", "Disabled"));
    data.forEach((Mentor) => {
        if (Mentor.Subject == selectedSubject)
            mentor.options.add(new Option(Mentor.name, Mentor.name));
    });
}

function grandFinal() {
    const cFirst = document.querySelector("#cFirst");
    const cLast = document.querySelector("#cLast");
    const cEmail = document.querySelector("#cEmail");
    const cPlan = document.querySelector("#cPlan");
    const cMentor = document.querySelector("#cMentor");
    const cTime = document.querySelector("#cTime");
    const cCode = document.querySelector("#cCode");
    cFirst.innerHTML = `<b>First name:</b> ${formData.firstName}`;
    cLast.innerHTML = `<b>Last name:</b> ${formData.lastName}`;
    cEmail.innerHTML = `<b>Email :</b> ${formData.email}`;
    cPlan.innerHTML = `<b>Plan type:</b> ${formData.type}`;
    cMentor.innerHTML = `<b>Mentor:</b> ${formData.mentor}`;
    cTime.innerHTML = `<b>Start Time:</b> ${formData.startTime}`;
    cCode.innerHTML = `<b>Confirmation number:</b> #E8S34N`;
}