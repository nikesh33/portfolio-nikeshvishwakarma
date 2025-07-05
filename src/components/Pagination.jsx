import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10 space-x-2 flex-wrap">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === num + 1
              ? "bg-teal-700 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {num + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
