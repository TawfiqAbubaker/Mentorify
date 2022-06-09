const subject = document.querySelector('#Subject');
const mentor = document.querySelector('#Mentor');
const data = [
    {
        name: "Rod Knee",
        Subject: "Engineering",
        KeySpecialties: "Computer Science",
        YearsProfessional: "5",
        YearsTutoring: "1",
        Rating: "4.9"
    },
    {
        name: "Rita Book",
        Subject: "Engineering",
        KeySpecialties: "Computer Science",
        YearsProfessional: "3",
        YearsTutoring: "1",
        Rating: "4.6"
    },
    {
        name: "Joe Awl",
        Subject: "Engineering",
        KeySpecialties: "Object oriented programming",
        YearsProfessional: "4",
        YearsTutoring: "2",
        Rating: "4.7"
    },
    {
        name: "Johnny Amber",
        Subject: "Engineering",
        KeySpecialties: "Chemical engineering",
        YearsProfessional: "5",
        YearsTutoring: "1",
        Rating: "4.3"
    },
    {
        name: "Deffy Amber",
        Subject: "Business",
        KeySpecialties: "Finance",
        YearsProfessional: "12",
        YearsTutoring: "3",
        Rating: "5"
    },
    {
        name: "Aninta Letterback",
        Subject: "Business",
        KeySpecialties: "Accounting",
        YearsProfessional: "4",
        YearsTutoring: "3",
        Rating: "4.1"
    },
    {
        name: "Audie Yose",
        Subject: "Business",
        KeySpecialties: "Management",
        YearsProfessional: "24",
        YearsTutoring: "12",
        Rating: "4.9"
    },
    {
        name: "Maddy Scope",
        Subject: "Business",
        KeySpecialties: "Finance",
        YearsProfessional: "4",
        YearsTutoring: "7",
        Rating: "4.4"
    },
    {
        name: "Peter File",
        Subject: "Music",
        KeySpecialties: "Guitar",
        YearsProfessional: "4",
        YearsTutoring: "7",
        Rating: "5"
    },
    {
        name: "Col Fays",
        Subject: "Music",
        KeySpecialties: "Piano",
        YearsProfessional: "12",
        YearsTutoring: "2",
        Rating: "4.3"
    },
    {
        name: "Andrianampoinimero Ramarosandratana",
        Subject: "Music",
        KeySpecialties: "Banjo & Beatboxing",
        YearsProfessional: "42",
        YearsTutoring: "40",
        Rating: "0.2"
    },
    {
        name: "Ayman Madeen",
        Subject: "Music",
        KeySpecialties: "Drums",
        YearsProfessional: "25",
        YearsTutoring: "1",
        Rating: "4.6"
    },

    {
        name: "Rod Knee",
        Subject: "Other",
        KeySpecialties: "Biology",
        YearsProfessional: "5",
        YearsTutoring: "2",
        Rating: "4.1"
    },
    {
        name: "Greg Aris",
        Subject: "Other",
        KeySpecialties: "Technical writing",
        YearsProfessional: "10",
        YearsTutoring: "4",
        Rating: "4.5"
    },
    {
        name: "Nasim Maner",
        Subject: "Other",
        KeySpecialties: "History",
        YearsProfessional: "30",
        YearsTutoring: "4",
        Rating: "3.9"
    },
    {
        name: "Jessica Campbell",
        Subject: "Other",
        KeySpecialties: "Social Sciences",
        YearsProfessional: "22",
        YearsTutoring: "12",
        Rating: "3.7"
    },
]

subject.addEventListener('change', function() {
    mentorListUpdater(this.value);
  }, false);
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }
 function mentorListUpdater(selectedSubject){
    removeOptions(mentor)
    mentor.options.add(new Option('Select an option', 'Disabled'));
    data.forEach(Mentor => {
        if(Mentor.Subject == selectedSubject)
        mentor.options.add(new Option(Mentor.name, Mentor.name));
    })
 }
