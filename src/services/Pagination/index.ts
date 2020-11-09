import { BodyData } from '@app/interfaces/TableData';

export function pagination(index: number, linesLimit: number, data: BodyData[]): BodyData[] | undefined {
  const newData: BodyData[] = [];
  let i = 0;
  let limit = 0;
  if (index == 1 && !!data) {
    while (i < linesLimit && i < data.length) {
      newData.push(data[i]);
      i++;
    }

    return newData;
  }

  i = index * linesLimit - linesLimit;
  limit = index * linesLimit;
  if (data) {
    while (i < limit && i < data.length) {
      newData.push(data[i]);
      i++;
    }

    return newData;
  }
}
