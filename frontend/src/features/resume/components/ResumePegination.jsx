import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResumePagination({
    currentPage = 1,
    totalPages = 5,
    totalItems = 30,
    itemsPerPage = 6,
    onPageChange = () => { },
}) {
    const startItem =
        totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const buttonBase =
        "flex h-9 min-w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors";

    const inactiveButton =
        "border-gray-200 bg-white text-gray-600 hover:bg-gray-50";

    const disabledButton =
        "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300";

    return (
        <div className="mt-6 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Results information */}
            <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-800">{startItem}</span>
                {" "}to{" "}
                <span className="font-semibold text-gray-800">{endItem}</span>
                {" "}of{" "}
                <span className="font-semibold text-gray-800">{totalItems}</span>
                {" "}resumes
            </p>

            {/* Pagination buttons */}
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    aria-label="Go to previous page"
                    className={`${buttonBase} ${currentPage <= 1 ? disabledButton : inactiveButton
                        }`}
                >
                    <ChevronLeft size={17} />
                </button>

                {getPageNumbers().map((page, index) =>
                    page === "..." ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="flex h-9 min-w-6 items-center justify-center text-sm text-gray-400"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            type="button"
                            onClick={() => onPageChange(page)}
                            aria-label={`Go to page ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`${buttonBase} ${currentPage === page
                                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                                    : inactiveButton
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Go to next page"
                    className={`${buttonBase} ${currentPage >= totalPages ? disabledButton : inactiveButton
                        }`}
                >
                    <ChevronRight size={17} />
                </button>
            </div>
        </div>
    );
}