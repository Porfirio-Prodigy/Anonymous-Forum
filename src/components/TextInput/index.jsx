
import {React, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import $ from "jquery";

const TextInput = ({ releaseAttr }) => {
  const [alias, SetAlias] = useState("");
  const [comment, SetComment] = useState("");
  const [Response, setResponse] = useState("");
  const [sendState, SetSendState] = useState("danger");

  function handleSubmit(e) {
    console.log();
    e.preventDefault();
    axios.post("http://localhost:3000/comments", {"author": alias, "text": comment})
        .then(function (response) {
            setResponse(response);
            SetSendState("danger");
            releaseAttr(response);

            if ($(".switch-nickname .form-check-input").is(":checked")) {
              SetComment("");
            }

            else {
              SetAlias("");
              SetComment("");
            }

        })
        .catch(function (error) {
            setResponse({data:[]})    
            console.log(error);
        })
        .finally(function () {

    });
  }

  useEffect(() => {
    if(alias !== "" && comment !== "") {
      SetSendState("success");
    }
    else {
      SetSendState("danger");
    }
  }, [alias, comment]);

  return (
    <>
      <Form onSubmit={handleSubmit} className='form-container'>
        <Container fluid>
          <Row className="form-groups">
           
              <Form.Group className='form-group' scontrolId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nickname" value={alias} onChange={(e) => SetAlias(e.target.value)} required/>
              </Form.Group>

              <Form.Check
                type="switch"
                id="nickname"
                label="Manter Nickname"
                className="switch-nickname"
              />

              <Form.Group className='form-group' placeholder='Comentário' scontrolId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" placeholder="Comentário" rows={2} value={comment} onChange={(e) => SetComment(e.target.value)}  required/>
              </Form.Group>

              <div className='submit-container'>
                <Button variant={sendState} type='submit'>Enviar</Button>
              </div>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default TextInput