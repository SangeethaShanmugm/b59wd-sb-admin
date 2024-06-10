import React from 'react'

function Table() {

    const tableData = [
        {
            name: "Tiger Nixon",
            position: "System Architect",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            position: "Accountant",
            salary: "$170,750"
        },
        {
            name: "Ashton Cox",
            position: "Accountant",
            salary: "$170,750"
        }
        ,
        {
            name: "Cedric Kelly",
            position: "Accountant",
            salary: "$170,750"
        },
        {
            name: "Airi Satou",
            position: "Accountant",
            salary: "$170,750"
        },
        {
            name: "Brielle Williamson",
            position: "Accountant",
            salary: "$170,750"
        },
        {
            name: "Herrod",
            position: "Accountant",
            salary: "$170,750"
        }
    ]
    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.position}</td>
                                            <td>{item.salary}</td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Table