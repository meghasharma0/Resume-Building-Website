import { capitalizeFirstLetter, areAllAlphabets } from "./basicFunctionality.js";
import { isNameValid, isValidEmail } from "./validations.js";

const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const selectCity = document.getElementById("selectCity");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const leetcode = document.getElementById("leetcode");

const objective = document.getElementById("objective");

const college = document.getElementById("college");
const collegeBranch = document.getElementById("collegeBranch");
const collegeCourse= document.getElementById("collegeCourse");
const collegeLocation = document.getElementById("collegeLocation");
const collegeMarks = document.getElementById("collegeCgpa");
const collegeYears = document.getElementById("collegeYears");

const school12 = document.getElementById("school12");
const subjects12 = document.getElementById("subjects12");
const location12 = document.getElementById("location12");
const marks12 = document.getElementById("marks12");
const years12 = document.getElementById("years12");

const school10 = document.getElementById("school10");
const location10 = document.getElementById("location10");
const marks10 = document.getElementById("marks10");
const years10 = document.getElementById("years10");

const skillSet = document.getElementById("skillSet");

const projectTitle = document.getElementById("projectTitle");
const proDes = document.getElementById("proDes");
const projectTitle2 = document.getElementById("projectTitle2");
const proDes2 = document.getElementById("proDes2");

const extraActivities = document.getElementById("extraActivities");

const englishOpt = document.getElementById("englishOpt");
const hindiOpt = document.getElementById("hindiOpt");

// GETTING STATES AND CITIES FROM APIS

const url = `https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/862bad5c2df8f6e6f10bb462c507052149189cf8/states-and-districts.json`;

const populateStateOptions = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const allStateObj = data.states;

    const selectState = document.getElementById("selectState");
    allStateObj.forEach((stateObj) => {
        const stateOption = document.createElement("option");
        stateOption.setAttribute("value", stateObj.state);
        stateOption.textContent = stateObj.state;
        selectState.appendChild(stateOption);
    })
}
const selectState = document.getElementById("selectState");
selectState.addEventListener("change", async () => {
    const res = await fetch(url);
    const data = await res.json();
    const allStatesObj = data.states;

    const selectedState = document.getElementById("selectState").value;
    const selectCity = document.getElementById("selectCity");

    const cities = allStatesObj.find((stateObj) => stateObj.state === selectedState )?.districts;

    if (cities){
        cities.forEach((city) => {
            const cityOption = document.createElement("option");
            cityOption.setAttribute("value", city);
            cityOption.textContent = city;
            selectCity.appendChild(cityOption);
        });
    }
})
populateStateOptions();
// ***************************************************

// SAVE BUTTON INFO
const reviewBtn = document.getElementById("reviewBtn");
reviewBtn.addEventListener("click", () => {
    window.open("resume.html", "_blank");
});

const saveInfo = () => {
    let nameVal = "", emailVal = "";
    if (isNameValid(username.value)){
        nameVal = username.value.toUpperCase();
    }
    if (isValidEmail(email.value)){
        emailVal = email.value;
    }
    const obj = {
        "Name": username.value.toUpperCase(),
        "Email": emailVal,
        "Phone": Number(phone.value),
        "State": selectState.value,
        "City": selectCity.value,
        "LinkedIn": linkedin.value,
        "Github": github.value,
        "Leetcode": leetcode.value,
        "Objective": objective.value,
        "College": capitalizeFirstLetter(college.value),
        "Branch": capitalizeFirstLetter(collegeBranch.value),
        "Course": capitalizeFirstLetter(collegeCourse.value),
        "LocationCollege": capitalizeFirstLetter(collegeLocation.value),
        "MarksCollege": collegeMarks.value,
        "YearsCollege": collegeYears.value,
        "Intermediate": capitalizeFirstLetter(school12.value),
        "Subjects": subjects12.value.toUpperCase(),
        "LocationSchool12": capitalizeFirstLetter(location12.value),
        "Marks12": marks12.value,
        "YearsSchool12": years12.value,
        "HighSchool": capitalizeFirstLetter(school10.value),
        "LocationSchool10": capitalizeFirstLetter(location10.value),
        "Marks10": marks10.value,
        "YearsSchool10": years10.value,
        "Skills": capitalizeFirstLetter(skillSet.value).split(", "),
        "ProjectTitle1": capitalizeFirstLetter(projectTitle.value),
        "ProjectDescription1": proDes.value,
        "ProjectTitle2": capitalizeFirstLetter(projectTitle2.value),
        "ProjectDescription2": proDes2.value,
        "ExtraCurricular": extraActivities.value,
        "Lang1": englishOpt.value,
        "Lang2": hindiOpt.value
    }
    localStorage.setItem("Student-Info", JSON.stringify(obj));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveInfo();
});


