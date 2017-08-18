import React from 'react';
import { Grid, Col } from 'react-bootstrap';

const TextContainer = ({ children }) => (
  <Grid style={{width: '100%', display: 'flex', flexDirection: 'center', justifyContent: 'center'}}>
    <Col sm={10} md={8} lg={6} >
      <p>{ children }</p>
    </Col>
  </Grid>
);

export default TextContainer;