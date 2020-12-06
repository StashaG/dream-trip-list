import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Dream Trip Destination</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Stacey</td>
                    <td>Kenya</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Summer</td>
                    <td>London</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="1">Jasmine</td>
                    <td>Thailand</td>
                </tr>
            </tbody>
        </table>
        )
    }
}

export default Table;