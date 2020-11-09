import React, { ReactElement, useEffect, useState } from 'react';

import { connect, DispatchProp } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '@app/store/ducks/actions/configTable';
import { sortTable, setIconHeader } from '@app/services/Sorting';
import { pagination } from '@app/services/Pagination';
import api from '@app/services/Api';

import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import { TableHeader, TableBody, TableFooter } from '@app/components';

import { HeaderTable, BodyData } from '@app/interfaces/TableData';
import { ConfigTable } from '@app/interfaces/TableFilter';

import TableEntregaWayStyle from './style';

interface Props {
  configTable: ConfigTable;
  toogleConfigFormat(isChecked: boolean): void;
}

const TableEntregaWay = ({ configTable, toogleConfigFormat }: Props): ReactElement => {
  useEffect(() => {
    paginationTable(1, configTable.linesPerPage);
    setHeaderFilter();
  }, [configTable]);

  const [data, setData] = useState<BodyData[]>();
  const [bodyData, setBodyData] = useState<BodyData[]>();
  const [header, setHeader] = useState<HeaderTable[]>();
  const [ascOrDesc, setAscOrDesc] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // FIXME
    setHeaderFilter();
    api.get('/ativo').then((res) => {
      if (res.statusText == 'OK') {
        setData(res.data);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    paginationTable(1, configTable.linesPerPage);
  }, [isLoading]);

  const setHeaderFilter = (): void => {
    const headerTable: HeaderTable[] = [
      {
        title: {
          name: 'Alerta',
          checked: configTable.filter.alarm,
          sorted: false,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Ativo',
          checked: configTable.filter.ativo,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Velocidade',
          checked: configTable.filter.velocidade,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Trajeto',
          checked: configTable.filter.trajeto,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Aderencia',
          checked: configTable.filter.aderencia,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Temperatura',
          checked: configTable.filter.temperatura,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Umidade',
          checked: configTable.filter.umidade,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Bateria',
          checked: configTable.filter.bateria,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Entregas',
          checked: configTable.filter.entregas,
          sorted: true,
          iconStatus: 'default',
        },
      },
      {
        title: {
          name: 'Detalhes',
          checked: configTable.filter.detalhe,
          sorted: false,
          iconStatus: 'default',
        },
      },
    ];
    setHeader(headerTable);
  };

  const paginationTable = (index: number, linesLimit: number) => {
    if (data) {
      const newData = pagination(index, linesLimit, data);
      setBodyData(newData);
    }
  };

  const handleGetTableData = (): void => {
    api.get('/ativo').then((res) => {
      if (res.statusText == 'OK') {
        setData(res.data);
      }
    });
  };

  const sort = (props: string, index: number): void => {
    if (bodyData && header) {
      const sortedData = sortTable(bodyData, props, ascOrDesc);
      setBodyData(sortedData);

      const newIconState = setIconHeader(header, ascOrDesc, index);
      setHeader(newIconState);

      setAscOrDesc(!ascOrDesc);
    }
  };

  const handleFormat = (): void => {
    const isChecked = !configTable.formatTable;
    toogleConfigFormat(isChecked);
  };

  return (
    <>
      <TableEntregaWayStyle>
        <button onClick={handleFormat}>Mudar Formato</button>
        <Table className="tableCustom" striped bordered hover size={configTable.formatTable ? 'sm' : ''}>
          <thead>
            <tr className="titleTable">
              {header
                ? header.map((item, index) => <TableHeader key={index} data={item} i={index} sort={sort} />)
                : null}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className="loadingSpinner">
                <td colSpan={100}>
                  <Spinner animation="border" role="status"></Spinner>
                </td>
              </tr>
            ) : bodyData ? (
              bodyData.map((item, index) => <TableBody key={index} filter={configTable.filter} data={item} />)
            ) : null}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={100} className="footerTable">
                {data ? (
                  <TableFooter
                    numberPerPage={configTable.linesPerPage}
                    lengthData={data.length}
                    pag={paginationTable}
                  />
                ) : (
                  <TableFooter numberPerPage={configTable.linesPerPage} lengthData={1} pag={paginationTable} />
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </TableEntregaWayStyle>
    </>
  );
};

const mapStateToProps = (state: any) => ({ configTable: state.configTable });

const mapDispatchToProps = (dispatch: DispatchProp) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableEntregaWay);
