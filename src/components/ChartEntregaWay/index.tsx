import React, { ReactElement } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ChartEntregaWayStyle from './style';

const ChartEntregaWay = (): ReactElement => {
  return (
    <ChartEntregaWayStyle>
      <Col className="chart">
        <Card style={{ width: '100%', height: '8rem' }}>
          <Card.Body>chart</Card.Body>
        </Card>
      </Col>
    </ChartEntregaWayStyle>
  );
};

export default ChartEntregaWay;
