import React from "react";

function Footer() {
  return (
    <footer class="footer-bg text-center text-lg-start">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-dark">
                  Programs
                </a>
              </li>

              <li>
                <a href="#!" class="text-dark">
                  {" "}
                  Certificates
                </a>
              </li>

              <li>
                <a href="#!" class="text-dark">
                  {" "}
                  Users
                </a>
              </li>

              <li>
                <a href="#!" class="text-dark">
                  {" "}
                  Payments
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-dark">
                  {" "}
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="#!" class="text-dark">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center p-3">
        <a class="text-dark" href="#">
          All rights reserved.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
