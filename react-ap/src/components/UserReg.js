import React,{useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Row,Col } from 'react-bootstrap';
import  {PostUsers} from "../actions/UserFetch";
import {useDispatch} from "react-redux";



import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function UserReg({ screenName }) {

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
      const [values, setValues] = useState({
      username:"",
      fullname:"",
      email:"",
      gender:"",
      
      


    });


    const usernamechange= (event) => {
      setValues({...values,username:event.target.value})
    }

    const fullnamechange= (event) => {
      setValues({...values,fullname:event.target.value})
    }

    const genderchange= (event) => {
      setValues({...values,gender:event.target.value})
    }

    

    const emailchange= (event) => {
      setValues({...values,email:event.target.value})
    }
    
    const PostUserDate = (event) =>
    {
      event.preventDefault();
      //console.log(values);
      //console.log(startDate);
      const data ={
        username:values.username,
        fullName:values.fullname,
        email:values.email,
        gender:values.gender,
        dateofBirth:startDate
        
        
  
  
      };
      //console.log(data);

      dispatch(PostUsers(data));
      
      
    
    }


    return (
        <div>
            
            <Form>

            <Row className="mb-3">
  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Control  placeholder="Enter Username" value={values.username} onChange={usernamechange}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>FullName</Form.Label>
    <Form.Control  placeholder="Enter Name" value={values.fullname} onChange={fullnamechange}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  </Row>

  
                <Row className="mb-3">
  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={values.email} onChange={emailchange}/>
    <Form.Text className="text-muted">
   

    </Form.Text>
    </Form.Group>

    {/*<Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label>Gender</Form.Label>
    <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic" value={gender} onChange={setGender}>
    Select Gender
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >Male</Dropdown.Item>
    <Dropdown.Item >Female</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
</Form.Group>
    */}
<Form.Group as={Col} controlId="formBasicEmail">
<label htmlFor="cars">Gender:</label>

<select name="cars" id="cars" value={values.gender} onChange={genderchange}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
</Form.Group>
  </Row>
  
  <Row className="mb-3">
  <Form.Label>Date Of Birth</Form.Label>
  <Form.Group className="mb-2"  as={Col} controlId="formBasicCheckbox">
  

  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  </Form.Group>

 
  </Row>
  <Button variant="primary" type="submit" onClick={PostUserDate}>
    Submit
  </Button>
</Form>
      


           </div>
    )
}
