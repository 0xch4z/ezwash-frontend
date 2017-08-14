import React from 'react';

const Map = (props) => (
  <iframe className="map"
    style={{
      width: '100%',
      height: props.height || '750px',
      border: 0, 
      marginTop: props.top ? 0 : '20px',
    }}
    frameBorder="0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoSo5hGay8XWdSxMqJ1KKHBLB89j9msps&q=EZ+Wash,Selam+NC"
    allowFullScreen
  />
);

export default Map;