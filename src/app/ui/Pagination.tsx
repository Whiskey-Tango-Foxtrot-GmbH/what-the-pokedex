interface PaginationProps {
  totalPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
  isDisableNext?: boolean
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  isDisableNext,
}: PaginationProps) {
  const handleNext = () => {
    if (!isDisableNext) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <nav
      className="mt-2 flex items-center justify-end space-x-4"
      aria-label="Pages navigation"
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="m-2 rounded-md bg-blue-500 p-2 text-blue-200"
        type="button"
        aria-label="Previous page"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={isDisableNext}
        className="m-2 rounded-md bg-blue-500 p-2 text-blue-200"
        type="button"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
}
