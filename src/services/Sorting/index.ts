import { BodyData, HeaderTable } from '@app/interfaces/TableData';
import { ETableSorting } from '@app/interfaces/TableDataSorting';

export function sortTable(array: BodyData[], column: string, ascOrDesc: boolean): BodyData[] {
  const key = ETableSorting[column];
  const typeColumn = keyVerify(key, array);
  console.log(typeColumn);
  if (ascOrDesc === true) {
    if (typeColumn == 'dispositivo') {
      array.sort((a, b) => {
        if (a[key].bateria < b[key].bateria) {
          return -1;
        }
        if (a[key].bateria > b[key].bateria) {
          return 1;
        }
        return 0;
      });
    }

    if (typeColumn == 'number') {
      array.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    }

    if (typeColumn == 'string') {
      array.sort((a, b) => {
        if (a[key].toLocaleLowerCase() < b[key].toLocaleLowerCase()) {
          return -1;
        }
        if (a[key].toLocaleLowerCase() > b[key].toLocaleLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    return array;
  } else {
    if (typeColumn == 'dispositivo') {
      array.sort((a, b) => {
        if (a[key].bateria < b[key].bateria) {
          return 1;
        }
        if (a[key].bateria > b[key].bateria) {
          return -1;
        }
        return 0;
      });
    }

    if (typeColumn == 'number') {
      array.sort((a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
    }

    if (typeColumn == 'string') {
      array.sort((a, b) => {
        if (a[key].toLocaleLowerCase() < b[key].toLocaleLowerCase()) {
          return 1;
        }
        if (a[key].toLocaleLowerCase() > b[key].toLocaleLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    return array;
  }
}

export function setIconHeader(header: HeaderTable[], ascOrDesc: boolean, index: number): HeaderTable[] {
  const data: HeaderTable[] = resetHeader(header);
  if (ascOrDesc == false) {
    data[index].title.iconStatus = 'up';
    return data;
  } else {
    data[index].title.iconStatus = 'down';
    return data;
  }
}

function resetHeader(data: HeaderTable[]): HeaderTable[] {
  data.forEach((item) => {
    item.title.iconStatus = 'default';
  });

  return data;
}

function keyVerify(key: string, array: BodyData[]) {
  // BUG
  if (key == 'dispositivo') {
    return 'dispositivo';
  }
  return typeof array[1][key];
}
