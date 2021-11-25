
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import DashboardGraph from "./DashboardGraph"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Dashboard = () => {

  return (
    <div className="dashboard">
      <Container fluid>
        <Row>

          <Col s={5} id="page-content-wrapper">

            <DashboardGraph />  


          </Col>
        </Row>

      </Container>

    </div>


  )
};

export default Dashboard