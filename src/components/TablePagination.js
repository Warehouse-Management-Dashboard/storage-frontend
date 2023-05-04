import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const TablePagination = ({ totalPages, currentPage, onPageChange }) => {
  const [groupStart, setGroupStart] = useState(1);
  const groupSize = 3;
  const [pagesArray, setPagesArray] = useState([]);
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    if (pageNumber <= groupSize) {
      setGroupStart(1);
    } else if (pageNumber > groupSize) {
      setGroupStart(pageNumber - Math.floor(groupSize / 2));
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= groupSize) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let groupEnd = groupStart + groupSize - 1;
      if (groupEnd > totalPages) {
        groupEnd = totalPages;
        setGroupStart(groupEnd - groupSize + 1);
      }
      for (let i = groupStart; i <= groupEnd; i++) {
        pages.push(i);
      }
      if (groupStart > 1) {
        pages.unshift("...");
        pages.unshift(1);
      }
      if (groupEnd < totalPages) {
        pages.push("...");
        pages.push(totalPages);
      }
    }
    setPagesArray(pages);
  };
  useEffect(() => {
    renderPageNumbers();
  }, [totalPages, currentPage]);
  return (
    <ButtonGroup className="table-navigate-button align-self-center">
      <Button
        onClick={() => {
          if (currentPage > 1) {
            handlePageChange(currentPage - 1);
          }
        }}
      >
        prev
      </Button>
      {pagesArray.map((pageNumber, index) => {
        return pageNumber === "..." ? (
          <Button key={index}>{pageNumber}</Button>
        ) : (
          <Button
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}
            key={index}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        onClick={() => {
          if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
          }
        }}
      >
        next
      </Button>
    </ButtonGroup>
  );
};

export default TablePagination;
