export type FilterTable = {
  alarm: boolean;
  ativo: boolean;
  velocidade: boolean;
  trajeto: boolean;
  aderencia: boolean;
  temperatura: boolean;
  umidade: boolean;
  bateria: boolean;
  entregas: boolean;
  detalhe: boolean;
};

export type ConfigTable = {
  filter: FilterTable;
  formatTable: boolean;
  linesPerPage: number;
};
