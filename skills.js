function renderSkills() {
  document.getElementById("title").innerHTML = "Welcome Skills";
  document.getElementById("test").innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            
            <ol>
                <li><b>Programming Languages:</b> Java, JavaScript</li>
                <li><b>Web Development:</b> HTML, CSS, Bootstrap</li>
                <li><b>Frameworks: </b>Spring Framework, Hibernate</li>
                <li><b>Databases:</b> MySQL, MongoDB</li>
                <li><b>Version Control: </b>Git</li>
                <li><b>IDEs:</b>IntelliJ IDEA, Eclipse</li>
            </ol><br>
            <div class="web">
            <img src="html5.jpeg" width="50" height="50" alt="linked">
            <img src="css.jpeg" width="50" height="50" alt="linked">
            <img src="js.jpeg" width="50" height="50" alt="linked">
            <img src="bootstrap.png" width="50" height="50" alt="linked">
            <img src="java.png" width="50" height="50" alt="linked">
            </div>
          </div>
          <div class="col-md-5">
            <img src="WhatsApp Image 2024-03-01 at 9.28.22 PM.jpeg" width="100%" height="100%" alt="download" />
          </div>
        </div>
      </div>
    `;
}
