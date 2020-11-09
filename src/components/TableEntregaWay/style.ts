import styled from 'styled-components';

const TableEntregaWayStyle = styled.div`
  .tableCustom {
    width: 100vw;
  }

  .table th {
    user-select: none;
    background: ${(props) => props.theme.colors.background.table.title};
    color: ${(props) => props.theme.colors.text.table.title};
  }

  .table th:hover {
    cursor: pointer;
  }

  .table th:focus {
    outline: none;
  }

  .table th:last-child:hover {
    cursor: default;
  }

  .table th:first-child:hover {
    cursor: default;
  }

  .iconTitle {
    margin-left: 5px;
  }

  .titleText {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
  }

  tbody tr:nth-child(odd) td {
    background: ${(props) => props.theme.colors.background.table.tdOdd};
  }

  tbody tr:nth-child(even) td {
    background: ${(props) => props.theme.colors.background.table.tdEven};
  }

  tbody tr:hover td {
    background: #e2eff8;
  }

  tbody tr:active td {
    background: #c1ddf1;
  }

  td,
  th {
    vertical-align: middle;
    text-align: center;
  }

  th {
    font-weight: 700;
  }

  td {
    font-weight: 500;
  }

  i {
    display: flex;
    justify-content: initial;
    align-items: center;
  }

  @media (max-width: 1474px) {
    .squareCustom {
      width: 550px;
    }
    @media (max-width: 1426px) {
      .squareCustom {
        width: 500px;
      }
    }
    @media (max-width: 1386px) {
      .squareCustom {
        width: 450px;
      }
    }
    @media (max-width: 1326px) {
      .squareCustom {
        width: 400px;
      }
    }
  }

  .andamento {
    color: rgba(140, 140, 140, 0.7);
  }

  .entregue {
    color: rgba(0, 239, 39, 0.7);
  }

  .reentrega {
    color: rgba(10, 193, 255, 0.7);
  }

  .naoEntregue {
    color: rgba(255, 0, 0, 0.7);
  }

  .roxo {
    color: rgba(210, 0, 214, 0.7);
  }

  .alarm {
    color: rgba(255, 0, 0, 0.7);
  }

  .temp {
    color: rgba(0, 100, 255, 0.9);
  }

  .sequencia {
    color: rgba(0, 239, 39, 0.7);
  }

  .humid {
    color: rgba(0, 239, 39, 0.7);
  }

  .batery {
    color: rgba(255, 0, 0, 0.7);
  }

  .footerTable {
    margin: 0;
    ul {
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }
`;

export default TableEntregaWayStyle;
