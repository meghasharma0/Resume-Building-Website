const data = JSON.parse(localStorage.getItem("Student-Info"));

document.getElementById("nameR").innerHTML = data.Name;
document.getElementById("basics").innerHTML = `+91 ${data.Phone} | ${data.Email} | ${data.City}, ${data.State}`;
const linkedIn = document.getElementById("linkedIn");
const leetcode = document.getElementById("leetcode");
const github = document.getElementById("github");
linkedIn.addEventListener("click", () => {
  window.open(data.LinkedIn, "_blank");
});
leetcode.addEventListener("click", () => {
  window.open(data.Leetcode, "_blank");
});
github.addEventListener("click", () => {
  window.open(data.Github, "_blank");
});

document.getElementById("objPara").innerHTML = data.Objective;

document.getElementById("collegeSpan").innerHTML = `<b>${data.College} | </b>${data.Branch} - ${data.Course}`;
document.getElementById("collegeLocationSpan").innerHTML = data.LocationCollege;
document.getElementById("collegeMarkspan").innerHTML = `CGPA - ${data.MarksCollege}`;
document.getElementById("collegeYearspan").innerHTML = data.YearsCollege;

document.getElementById("school12Span").innerHTML = `<b>${data.Intermediate} | </b>Intermediate - ${data.Subjects}`;
document.getElementById("school12LocationSpan").innerHTML = data.LocationSchool12;
document.getElementById("school12Markspan").innerHTML = `Percentage - ${data.Marks12} %`;
document.getElementById("school12Yearspan").innerHTML = data.YearsSchool12;

document.getElementById("school10Span").innerHTML = `<b>${data.HighSchool} | </b>High School`;
document.getElementById("school10LocationSpan").innerHTML = data.LocationSchool10;
document.getElementById("school10Markspan").innerHTML = `Percentage - ${data.Marks10}%`;
document.getElementById("school10Yearspan").innerHTML = data.YearsSchool10;

const skillUL = document.getElementById("skillUL");
let items = data.Skills;
for (let item of items) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  skillUL.appendChild(listItem);
}
skillUL.style.textAlign = "left";

document.getElementById("projectTitle1").innerHTML = data.ProjectTitle1;
document.getElementById("projectPara1").innerHTML = data.ProjectDescription1;
document.getElementById("projectTitle2").innerHTML = data.ProjectTitle2;
document.getElementById("projectPara2").innerHTML = data.ProjectDescription2;

document.getElementById("extraPara").innerHTML = data.ExtraCurricular

document.getElementById("langPara").innerHTML = `${data.Lang1}, ${data.Lang2}`;

 






















saveBtn.addEventListener("click", () => {
  // const element = document.getElementById("target");

  // html2pdf()
  // .from(element)
  // .set({ margin: [0, 0] })
  // .save();

  var element = document.getElementById('target');
      var opt = {
        margin:       [0, -100],
        filename:     'myfile.pdf',
        // image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
})

