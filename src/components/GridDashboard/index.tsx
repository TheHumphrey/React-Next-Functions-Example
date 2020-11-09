import React from 'react';
import { Provider } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { TableEntregaWay, ChartEntregaWay, FilterEntregaWay } from '@app/components';

import GridDashboardStyle from './style';

import store from '@app/store';

const GridDashboard = (): React.ReactElement => {
  const chartData = [1, 2, 3, 4];
  return (
    <>
      <GridDashboardStyle>
        <Provider store={store}>
          <Container className="grid" fluid={true}>
            <div>
              <Row className="chart" lg={4} md={4} sm={2} xs={2}>
                {chartData.map((id) => {
                  return <ChartEntregaWay key={id} />;
                })}
              </Row>
              <Row className="filterRow">
                <Col className="filter">
                  <FilterEntregaWay />
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="table">
                <TableEntregaWay />
              </Col>
            </Row>
          </Container>
        </Provider>
      </GridDashboardStyle>
    </>
  );
};

export default GridDashboard;
