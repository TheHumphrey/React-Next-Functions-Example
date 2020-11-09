import { ConfigTable } from '@app/interfaces/TableFilter';

const INITIAL_STATE: ConfigTable = {
  filter: {
    alarm: true,
    ativo: true,
    velocidade: true,
    trajeto: true,
    aderencia: true,
    temperatura: true,
    umidade: true,
    bateria: true,
    entregas: true,
    detalhe: true,
  },
  formatTable: true,
  linesPerPage: 15,
};

const configTable = (state: ConfigTable = INITIAL_STATE, action: any): ConfigTable => {
  if (action.type === 'TOOGLE_CONFIG_LINE') {
    return { ...state, linesPerPage: action.linesPerPage };
  }
  if (action.type === 'TOOGLE_CONFIG_COLUMN') {
    return { ...state, filter: action.filter };
  }
  if (action.type === 'TOOGLE_CONFIG_FORMAT') {
    return { ...state, formatTable: action.isChecked };
  }

  return state;
};

export default configTable;
