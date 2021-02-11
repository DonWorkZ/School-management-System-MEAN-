import React from 'react'

function EmploymentTab({user}) {
    return (
        <div>
             <div className="row  mb-3">
                <div className="col-4">Position Role: </div>
                <div className="col-6">{user.user?.position || "N/A"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Department: </div>
                <div className="col-6">{user.user?.department || "N/A"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Campus: </div>
                <div className="col-6">{user.user?.campus || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Employment Date</div>
                <div className="col-6">{user.user?.employmentDate || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Qualification: </div>
                <div className="col-6">{user.user?.qualification || "N/A"}</div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Years of Experince: </div>
                <div className="col-6">{user.user?.experience || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Salary: </div>
                <div className="col-6">{user.user?.salary || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Allowance: </div>
                <div className="col-6">{user.user?.salary || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Class: </div>
                <div className="col-6">{user.user?.salary || "N/A"} </div>
            </div>
            <div className="row  mb-3">
                <div className="col-4">Teaching Courses: </div>
                <div className="col-6">{user.user?.courses.map(res => <span key={res._id}>{res.name};</span>) || "N/A"} </div>
            </div>
        </div>
    )
}

export default EmploymentTab