import React, { ReactElement } from 'react';

import { connect, DispatchProp } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import { ConfigTable, FilterTable } from '@app/interfaces/TableFilter';
import * as Actions from '@app/store/ducks/actions/configTable';

interface Props {
  config: ConfigTable;
  toogleConfigLine(line: number): void;
  toogleConfigColumn(filter: FilterTable): void;
}

const FilterEntregaWay = ({ config, toogleConfigLine, toogleConfigColumn }: Props): ReactElement => {
  return (
    // TODO
    <>
      <div>
        <DropdownButton id="dropdown-basic-button" title={`Linhas por pagina: ${config.linesPerPage}`}>
          <Dropdown.Item onClick={() => toogleConfigLine(15)}>15</Dropdown.Item>
          <Dropdown.Item onClick={() => toogleConfigLine(30)}>30</Dropdown.Item>
          <Dropdown.Item onClick={() => toogleConfigLine(50)}>50</Dropdown.Item>
          <Dropdown.Item onClick={() => toogleConfigLine(100)}>100</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title={`Colunas visiveis:`}>
          <Form.Check
            type="checkbox"
            label="Alarme"
            onChange={() => toogleConfigColumn({ ...config.filter, alarm: !config.filter.alarm })}
            defaultChecked={config.filter.alarm}
          />
          <Form.Check
            type="checkbox"
            label="Ativo"
            onChange={() => toogleConfigColumn({ ...config.filter, ativo: !config.filter.ativo })}
            defaultChecked={config.filter.ativo}
          />
          <Form.Check
            type="checkbox"
            label="velocidade"
            onChange={() => toogleConfigColumn({ ...config.filter, velocidade: !config.filter.velocidade })}
            defaultChecked={config.filter.velocidade}
          />
          <Form.Check
            type="checkbox"
            label="trajeto"
            onChange={() => toogleConfigColumn({ ...config.filter, trajeto: !config.filter.trajeto })}
            defaultChecked={config.filter.trajeto}
          />
          <Form.Check
            type="checkbox"
            label="aderencia"
            onChange={() => toogleConfigColumn({ ...config.filter, aderencia: !config.filter.aderencia })}
            defaultChecked={config.filter.aderencia}
          />
          <Form.Check
            type="checkbox"
            label="temperatura"
            onChange={() => toogleConfigColumn({ ...config.filter, temperatura: !config.filter.temperatura })}
            defaultChecked={config.filter.temperatura}
          />
          <Form.Check
            type="checkbox"
            label="umidade"
            onChange={() => toogleConfigColumn({ ...config.filter, umidade: !config.filter.umidade })}
            defaultChecked={config.filter.umidade}
          />
          <Form.Check
            type="checkbox"
            label="bateria"
            onChange={() => toogleConfigColumn({ ...config.filter, bateria: !config.filter.bateria })}
            defaultChecked={config.filter.bateria}
          />
          <Form.Check
            type="checkbox"
            label="entregas"
            onChange={() => toogleConfigColumn({ ...config.filter, entregas: !config.filter.entregas })}
            defaultChecked={config.filter.entregas}
          />
          <Form.Check
            type="checkbox"
            label="detalhe"
            onChange={() => toogleConfigColumn({ ...config.filter, detalhe: !config.filter.detalhe })}
            defaultChecked={config.filter.detalhe}
          />
        </DropdownButton>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({ config: state.configTable });

const mapDispatchToProps = (dispatch: DispatchProp) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterEntregaWay);
