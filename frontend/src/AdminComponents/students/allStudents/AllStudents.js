import React, {useState} from 'react'
import Search from '../../shared/Search'
import StudentsTable from '../../shared/TableListUsers';

function AllStudents() {
   const [name, setname] = useState("");
   const [id, setid] = useState("");
   const [classID, setclass] = useState("")


   const headCells = [
    { id: 'userID', numeric: false, disablePadding: false, label: 'StudentID' }, 
    { id: 'photoUrl', numeric: false, disablePadding: false, label: 'Photo' },
     { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
     { id: 'middlename', numeric: true, disablePadding:true, label: 'Middle Name' },
     { id: 'surname', numeric: true, disablePadding: true, label: 'Last Name' },
     { id: 'class', numeric: true, disablePadding: false, label: 'Class' },
     { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
     { id: 'telephone', numeric: true, disablePadding: false, label: 'telephone' },
     { id: 'Gender', numeric: true, disablePadding: false, label: 'Gender' },
   ];

   const students = [
     {
       userID: "BK20211",
       photoUrl: "",
       name: "Rudo",
       classID: "2A",
       middleName: "",
       surname: "mapfumba",
       dateofBirth: "25-01-1998",
       email: "rudomaru@gmail.com",
       telephone: "15605426035",
       gender: "female",
     },
     {
      userID: "BK20212",
      photoUrl: "",
      name: "Rudo",
      classID: "2A",
      middleName: "",
      surname: "mapfumba",
      dateofBirth: "25-01-1998",
      email: "rudomaru@gmail.com",
      telephone: "15605426035",
      gender: "female",
    },
    {
      userID: "BK20213",
      photoUrl: "",
      name: "Rudo",
      classID: "2A",
      middleName: "",
      surname: "mapfumba",
      dateofBirth: "25-01-1998",
      email: "rudomaru@gmail.com",
      telephone: "15605426035",
      gender: "female",
    },
    {
      userID: "BK20214",
      photoUrl: "",
      name: "Rudo",
      classID: "2A",
      middleName: "",
      surname: "mapfumba",
      dateofBirth: "25-01-1998",
      email: "rudomaru@gmail.com",
      telephone: "15605426035",
      gender: "female",
    },
    {
      userID: "BK20215",
      photoUrl: "",
      name: "Rudo",
      classID: "2A",
      middleName: "Faith",
      surname: "mapfumba",
      dateofBirth: "25-01-1998",
      email: "rudomaru@gmail.com",
      telephone: "15605426035",
      gender: "female",
    },
    {
      userID: "BK20216",
      photoUrl: "",
      name: "Rudo",
      classID: "2A",
      middleName: "Loveness",
      surname: "mapfumba",
      dateofBirth: "25-01-1998",
      email: "rudomaru@gmail.com",
      telephone: "15605426035",
      gender: "female",
    }
   ]
   const inputFields = [
    {
        type: "text",
        label: "",
        value: id,
        name: "Student ID",
        onChange: {setid}
    },
    {
     type: "text",
     label: "",
     value: name,
     name: "Name",
     onChange: {setname}
 },
   {
     type: "text",
     label: "",
     value: classID,
     name: "Class",
     onChange: {setclass}
   }
]
   

   const handleSearch = (e) => {
     e.preventDefault();
   }

  return (
    <div className="content__container">
      <Search
           title=""
           inputFields={inputFields}
        />
      <StudentsTable students={students}  headCells={headCells}/>
    </div>
  )
}

export default AllStudents