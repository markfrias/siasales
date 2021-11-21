import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import LinkButton from '../components/LinkButton';


function registration4() {
  return (
    <Form>
      <div class="row pageContainer">
        <div class="title-image">
          <div class="title">
              <div class="r4-text">
                <h1>wilbur</h1>
                <p>Sales Information System</p>
              </div>
            </div>

              <div class="image">

            </div>
          </div>

        <div class="register">
          <div class="r4-register">
            <div >
          <ProgressBar animated class="r4-progress" now={100} />
            </div>

            <div class="r4-account">
              <h1>Account Creation Successful</h1>
              <p>You can now Login to your Account</p>
            </div>
            
            <form action="/App" class="button-group">
            <LinkButton link="Login" label="Go to login"></LinkButton>
            </form>
          </div>
        </div>
      </div>
    </Form>

  );
}

export default registration4;