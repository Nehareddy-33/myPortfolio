function renderContact() {
  document.getElementById("title").innerHTML = "Welcome Contact";
  document.getElementById("test").innerHTML = `
        <div class="container">
          <div class="row">
            <div class="col-md-7">
                <h3> Contact Information:</h3>
                <pre class="font">
                <b>Name:</b>A.Nehasri
                <b>Address:</b> 123 Main Street, Cityville, State, ZIP Code
                <b>Phone:</b> +1 (123) 456-7890
                <b>Email: </b>neha.sri@email.com
                <b>LinkedIn: </b>linkedin.com/in/nehasri
                </pre>
                <div class="logo">
                <img src="emaillogo.png" width="50" height="50" alt="email">
                <img src="linked.jpeg" width="50" height="50" alt="linked">
                <img src="git.png" width="50" height="50" alt="linked">
                <img src="insta.jpeg" width="50" height="50" alt="linked">
                <img src="facebook.jpeg" width="50" height="50" alt="linked">
            </div>
            </div>
            <div class="col-md-5">
                  <img src="contact.jpg" width="100%" height="100%" alt="images" />
            </div>
            </div>
          </div>
      `;
}
