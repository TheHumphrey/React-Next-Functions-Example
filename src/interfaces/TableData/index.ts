export type HeaderTable = {
  title: {
    name: string;
    checked: boolean;
    sorted: boolean;
    iconStatus: string;
  };
};

export type BodyData = {
  ativo: string;
  velocidade: number;
  trajeto: number;
  aderencia: number;
  temperatura: number;
  umidade: number;
  dispositivo: Dispositivo;
  entregas: Entrega[];
};

type Dispositivo = {
  bateria: number;
};

type Entrega = {
  status: number;
  ordem: number;
  cliente: string;
};
