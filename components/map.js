import React from 'react';

const Map = (props) => (
  <iframe
    style={{width: '100%', height: props.height || '750px', border: 0, marginTop: '20px'}}
    frameborder="0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoSo5hGay8XWdSxMqJ1KKHBLB89j9msps&q=EZ+Wash,Selam+NC"
    allowfullscreen
  />
);

export default Map;