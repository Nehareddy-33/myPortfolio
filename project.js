function renderProject() {
  document.getElementById("title").innerHTML = "Welcome Project";
  document.getElementById("test").innerHTML = `
      <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h4>Online Bookstore Application</h4>
                <ul>
                    <li>
                        Developed a web-based bookstore application using Java Servlets and JSP for frontend and backend.
                    </li> 
                    <li>  
                        Implemented features such as user authentication, product catalog management, and shopping cart functionality.
                    </li> 
                    <li>
                        Integrated MySQL database for storing user information, product details, and order history.
                    </li>
                </ul>
            </div>
            <div class="col-md-5">
                <img src="project.jpeg" width="100%" height="100%" alt="images" />
            </div>
        </div>
      </div>
    `;
}
