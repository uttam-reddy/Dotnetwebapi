import React,{useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Row,Col,Dropdown } from 'react-bootstrap';
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function UserReg() {
    const [startDate, setStartDate] = useState(new Date());
    const [gender, setGender] = useState("male");


    return (
        <div>
            
            <Form>

            <Row className="mb-3">
  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Control  placeholder="Enter Username" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>FullName</Form.Label>
    <Form.Control  placeholder="Enter Name" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  </Row>

  
                <Row className="mb-3">
  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
   

    </Form.Text>
    </Form.Group>

    <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>Gender</Form.Label>
    <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic" value={gender}>
    
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >Male</Dropdown.Item>
    <Dropdown.Item >Female</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
</Form.Group>


  
  </Row>
  
  <Row className="mb-3">
  <Form.Label>Date Of Birth</Form.Label>
  <Form.Group className="mb-2"  as={Col} controlId="formBasicCheckbox">
  

  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  </Form.Group>

 
  </Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      


           </div>
    )
}
