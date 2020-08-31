
import React from "react"
import { createPagination } from './createPagination'

function Pagination({ currentPage, setCurrentPage, info }) {
    const { count } = info ? info : 200

    const { pagination } = createPagination({
        numberOfArticles: count || 200,
        articlesPerPage: 20,
        numberOfButtons: 8,
        currentPage
    })

    const handleClick = page => setCurrentPage(page)

    return (
        <div className="pagination">
            <ul className='pagination__list'>
                <li
                    className={`${pagination[0] === currentPage ? "disabled __show" : "false __show"}`}
                    onClick={handleClick.bind(null, currentPage - 1)}>
                    Prev
                </li>
                {pagination.map((page, index) => (
                    <li
                        key={index}
                        className={`${currentPage === page && "active"}`}
                        onClick={handleClick.bind(null, page)}>
                        {page}
                    </li>))}
                <li
                    className={`${pagination.reverse()[0] === currentPage ? "disabled __show" : "false __show"}`}
                    onClick={handleClick.bind(null, currentPage + 1)}>
                    Next
                </li>
            </ul>
        </div>
    )
}

export default Pagination