import "./registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import LinkButton from "../components/LinkButton";

function Registration4() {
  return (
      

      <div class="register">
        <div class="r4-register">
          <div>
            <ProgressBar animated class="r4-progress" now={100} />
          </div>

          <div class="r4-account">
            <h1>Account Creation Successful</h1>
            <p>You can now Login to your Account</p>
          </div>

          <form action="/App" class="button-group">
            <LinkButton link="/login" label="Go to login"></LinkButton>
          </form>
        </div>
      </div>
  );
}

export default Registration4;
