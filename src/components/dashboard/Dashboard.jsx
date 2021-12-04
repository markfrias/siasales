
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import DashboardGraph from "./DashboardGraph"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.css"
import DashboardInfo from "./DashboardInfo";


const Dashboard = () => {

  return (
    <div className="dashboard">
      <Container fluid>
        <Row>

          <Col s={5} id="page-content-wrapper">
            <DashboardInfo />
         <DashboardGraph />  



          </Col>
        </Row>

      </Container>

    </div>


  )
};

export default Dashboard