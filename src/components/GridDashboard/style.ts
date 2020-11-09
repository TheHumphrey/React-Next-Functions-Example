import styled from 'styled-components';

const GridDashboardStyle = styled.div`
  .grid {
    width: 100vw;
    height: 100vh;
  }

  .chart {
    width: 100vw;
  }

  .filterRow {
    width: 100vw;
  }

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    height: 80px;
    border: solid 1px #666;
    border-radius: 10px;
  }

  .table {
    padding: 0;
    margin: 0;
  }
`;

export default GridDashboardStyle;
