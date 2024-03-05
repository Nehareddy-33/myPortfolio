function renderHome() {
  document.getElementById("title").innerHTML = "Welcome Home";
  document.getElementById("test").innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h4>Career Objective:</h4>
          <p class="">A dedicated and enthusiastic Junior Software Engineer with a passion for coding and problem-solving. 
          Seeking to leverage my educational background and internship experience in 
          software development to contribute effectively to dynamic projects and enhance my skills in a 
          collaborative team environment.
          </p>
          <h4>Education:</h4>
          <p>Bachelor of Science in Computer Science in 
          JNT University, Hyderabad, Telangana, 500071
          </p>
        </div>
        <div class="col-md-5">
          <img src="images.jpeg" width="100%" height="100%" alt="images" />
        </div>
      </div>
    </div>
  `;
}
window.onload = function () {
  renderHome();
  console.log("window.onload");
};
