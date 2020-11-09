import React, { ReactElement, useEffect, useState } from 'react';

import Pagination from 'react-bootstrap/Pagination';

interface Data {
  numberPerPage: number;
  lengthData: number;
  pag(index: number, limit: number): void;
}

const TableFooter = ({ numberPerPage, lengthData, pag }: Data): ReactElement => {
  const [page, setPage] = useState<number[]>([]);
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    const paginationLength: number = Math.ceil(lengthData / numberPerPage);
    const arrayPage: number[] = [];
    for (let i = 1; i <= paginationLength; i++) {
      arrayPage.push(i);
    }
    setPage(arrayPage);
  }, [lengthData, numberPerPage]);

  const handleSetActive = (number: number): void => {
    if (number > 0 && number <= page.length) {
      setActive(number);
      pag(number, numberPerPage);
    }
  };
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          handleSetActive(active - 1);
        }}
      />
      {page.map((number) => (
        <Pagination.Item key={number} onClick={() => handleSetActive(number)} active={number === active}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => {
          handleSetActive(active + 1);
        }}
      />
    </Pagination>
  );
};

export default TableFooter;
