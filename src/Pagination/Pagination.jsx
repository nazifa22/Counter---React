import React from 'react'
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    console.log('count', pageSize)

    if(pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                {
                    pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <a class="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;