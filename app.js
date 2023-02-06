const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

// function handleSubmit(e) {
//   e.preventDefault();
function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields


  var name = document.getElementById("name").value;
  document.getElementById("display-name").innerHTML = name;
  document.getElementById("name").value = '';

  var email = document.getElementById("email").value;
  document.getElementById("display-email").innerHTML = email;
  document.getElementById("email").value = '';

  var phone = document.getElementById("phone").value;
  document.getElementById("display-phone").innerHTML = phone;
  document.getElementById("phone").value = '';

  var github = document.getElementById("github").value;
  document.getElementById("display-github").innerHTML = github;
  document.getElementById("github").value = '';

  var linkedin = document.getElementById("linkedin").value;
  document.getElementById("display-linkedin").innerHTML = linkedin;
  document.getElementById("linkedin").value = '';

  var degree = document.getElementById("degree").value;
  document.getElementById("display-degree").innerHTML = degree;
  document.getElementById("degree").value = '';

  var college = document.getElementById("college").value;
  document.getElementById("display-college").innerHTML = college;
  document.getElementById("college").value = '';

  var startingYear = document.getElementById("startingYear").value;
  document.getElementById("display-startingYear").innerHTML = startingYear;
  document.getElementById("startingYear").value = '';

  var passingYear = document.getElementById("passingYear").value;
  document.getElementById("display-passingYear").innerHTML = passingYear;
  document.getElementById("passingYear").value = '';

  var cgpa = document.getElementById("cgpa").value;
  document.getElementById("display-cgpa").innerHTML = cgpa;
  document.getElementById("cgpa").value = '';

  var skills = document.getElementById("skills").value;
  document.getElementById("display-skills").innerHTML = skills;
  document.getElementById("skills").value = '';

  var project = document.getElementById("project").value;
  document.getElementById("display-project").innerHTML = project;
  document.getElementById("project").value = '';

  var description1 = document.getElementById("description1").value;
  document.getElementById("display-description1").innerHTML = description1;
  document.getElementById("description1").value = '';

  var link = document.getElementById("link").value;
  document.getElementById("display-link").innerHTML = link;
  document.getElementById("link").value = '';

  var company = document.getElementById("company").value;
  document.getElementById("display-company").innerHTML = company;
  document.getElementById("company").value = '';

  var designation = document.getElementById("designation").value;
  document.getElementById("display-designation").innerHTML = designation;
  document.getElementById("designation").value = '';

  var duration = document.getElementById("duration").value;
  document.getElementById("display-duration").innerHTML = duration;
  document.getElementById("duration").value = '';

  var description2 = document.getElementById("description2").value;
  document.getElementById("display-description2").innerHTML = description2;
  document.getElementById("description2").value = '';
  }
  

function handleLeft( ) {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  left.style.display = "none";
  right.style.width = "100%";
  print.style.display = "block";
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  window.print();
  right.classList.add("reduced");
  left.classList.remove("hidden");
  print.classList.add("hidden");
  // write more codes here
}