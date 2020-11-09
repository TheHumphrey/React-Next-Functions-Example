import { FilterTable } from '@app/interfaces/TableFilter';

export const toogleConfigLine = (linesPerPage: number) => {
  return {
    type: 'TOOGLE_CONFIG_LINE',
    linesPerPage,
  };
};

export const toogleConfigColumn = (filter: FilterTable) => {
  return {
    type: 'TOOGLE_CONFIG_COLUMN',
    filter,
  };
};

export const toogleConfigFormat = (isChecked: boolean) => {
  return {
    type: 'TOOGLE_CONFIG_FORMAT',
    isChecked,
  };
};
