import React, { ReactElement } from 'react';

import { HeaderTable } from '@app/interfaces/TableData';

interface Props {
  data: HeaderTable;
  i: number;
  sort(string: string, index: number): void;
}

const TableHeader = ({ data, i, sort }: Props): ReactElement | null => {
  const icon = (props: string) => {
    if (props == 'up') {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
        </svg>
      );
    } else if (props == 'down') {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg>
      );
    } else {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
        </svg>
      );
    }
  };

  return data.title.checked ? (
    data.title.sorted ? (
      <th onClick={() => sort(data.title.name.toLocaleLowerCase(), i)}>
        <i className="titleText">
          {data.title.name}
          {icon(data.title.iconStatus)}
        </i>
      </th>
    ) : (
      <th>{data.title.name}</th>
    )
  ) : null;
};

export default TableHeader;
