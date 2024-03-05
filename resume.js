function renderResume() {
  document.getElementById("title").innerHTML = "Welcome Resume";
  document.getElementById("test").innerHTML = `
        <div class="container">
          <div class="row">
            <div class="col-md-7">
                <h4> Professional Experience:</h4>

                <b>Junior Software Engineer Intern</b>
                <div>
                    XYZ Tech Solutions, City, State
                    Duration: May 20XX - August 20XX
                    <ul>
                        <li>
                            Collaborated with senior engineers to develop and maintain web applications using Java and Spring Framework.
                        </li>
                        <li>    
                            Participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives.
                        </li>
                        <li>    
                            Assisted in debugging and troubleshooting software issues, ensuring timely resolution and minimal downtime.
                        </li>
                        <li>    
                        Contributed to the design and implementation of database schemas and queries for efficient data storage and retrieval.
                        </li>
                        <li>    
                          Conducted code reviews and provided feedback to improve code quality and adherence to coding standards.
                        </li>
                    </ul>
                       <button class="resume"> <a href="resume.pdf">Download Resume</a></button>
                </div>
            </div>
            <div class="col-md-5">
              <img src="WhatsApp Image 2024-03-01 at 9.30.56 PM.jpeg" width="100%" height="100%" alt="download" />
            </div>
          </div>
        </div>
      `;
}
