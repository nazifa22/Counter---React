import React, { Component } from 'react';

export default class TableHeader extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};

        if(sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        }
        
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn);
    }


    render() {
        return (
            <thead class="thead-dark">
                <tr>
                    {
                        this.props.columns.map(column => (
                            <th scope="col" onClick={() => this.raiseSort(column.path)} key={column.path || column.key}>
                                { column.lable } 
                            </th>
                        ))
                    }
                </tr>
            </thead>
        )
    }
}
