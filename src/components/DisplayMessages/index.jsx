import {React, useState, useEffect} from 'react'
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const DisplayMessages = ({attr}) => {
  const [Response, setResponse] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/comments")
    .then(function (response) {
        setResponse(response);
    })
    .catch(function (error) {
        setResponse({data:[]})    
      console.log(error);
    })
    .finally(function () {
  });
  }, [attr])

  const RandomColor = () => {
    let ColorNumber = Math.floor(Math.random() * 5)+1;
    switch (ColorNumber) {
      case 1:
        return "primary";
      case 2:
        return "secundary";
      case 3:
        return "success";
      case 4:
        return "warning";
      case 5:
        return "danger";
      case 6:
        return "info";
      default:
        return "dark";

    }
  };
  
  return (
    <div>
      <Stack gap={2} className='container-messages'>
      <ListGroup>
        {Response?.data &&
          Response?.data.map((item, index) => 
            
            <div key={index} className={"container-message"} >
              <ListGroup.Item variant={RandomColor()}>
                <h5>
                  <strong>{item.author}</strong>
                </h5>
                <p>{item.text}</p>
              </ListGroup.Item>
            </div>
          )
        }
      </ListGroup>
      </Stack>
    </div>
  )
}

export default DisplayMessages;