const tableDesc = document.querySelector("#tableDesc");
const tableEng = document.querySelector("#tableEng");
const tableBus = document.querySelector("#tableBus");
const tableMus = document.querySelector("#tableMus");
const tableOth = document.querySelector("#tableOth");
const tableM1 = document.querySelector("#tableM1");
const tableM2 = document.querySelector("#tableM2");
const tableM3 = document.querySelector("#tableM3");
const tableM4 = document.querySelector("#tableM4");
const tableSubjects = [tableEng, tableBus, tableMus, tableOth];
const tableMs = [tableM1,tableM2,tableM3,tableM4];

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

let selectedSubject = tableEng;
let selectedMentor=  tableM1;
selectedSubject.style.backgroundColor = "#CBFCFF";
selectedMentor.style.backgroundColor = "#CBFCFF";
const mentorUpdater = (subject) => {
    selectedSubject.style.backgroundColor = "";
    subject.style.backgroundColor = "#CBFCFF";
    selectedSubject = subject;
    selectedMentor.style.backgroundColor = "";
    tableDesc.innerHTML = ``
    let counter = 0;
    data.forEach(person => {
        if(person.Subject === subject.textContent){
            tableMs[counter].innerHTML = `${person.name}`;
            counter++;
        }
    })
}
const descriptionUpdater = (mentor) => {
    selectedMentor.style.backgroundColor = "";
    mentor.style.backgroundColor = "#CBFCFF";
    selectedMentor = mentor;
    data.forEach(person => {
        if(person.name === mentor.textContent){
            tableDesc.innerHTML = `
            <ul>
                <li class="mb-3">Specialty: ${person.KeySpecialties}</li>
                <li class="mb-3">Years of professional experience: ${person.YearsProfessional}</li>
                <li class="mb-3">Years of tutoring: ${person.YearsTutoring}</li>
                <li class="mb-3">Rating : ${person.Rating} ⭐</li>
             </ul>
            `;
        }
    })
}
tableSubjects.forEach(subject => {
    subject.addEventListener("click",()=> mentorUpdater(subject));
});
tableMs.forEach(mentor => {
    mentor.addEventListener("click",()=> descriptionUpdater(mentor));
})

var scroll = new SmoothScroll('.nav-link a[href*="#"]', {
	speed: 800
});