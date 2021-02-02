import React from 'react'

function Personalnfo(props) {
    let { name, 
        setname, 
        secondName, 
        setsecondName,
        lastname,
        setlastname,
        gender,
        setgender,
        dateofBirth,
        setdateofBirth,
        email,
        setemail,
        nationality,
        setnationality,
        placeofBirth,
        setplaceofBirth,
        religion,
        setreligion,
        errors,
        register,
       } = props
    return (
        <div>
             <h3>Personal Information</h3>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="name" className="form-label">First Name</label>
                            <input 
                              name="name" 
                              type="text" 
                              value={name}
                              ref={register({ required: true })} 
                              onChange={e => setname(e.target.value)}
                              className="form-control" 
                              placeholder="" />
                               {errors.name && <span className=" form-error text-danger mb-2">This field is required</span>}
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="secondname" className="form-label">Second Name</label>
                            <input 
                             type="text"
                             name="secondname"
                             value={secondName}
                             onChange={e => setsecondName(e.target.value)} 
                             className="form-control" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="lastname" className="form-label">Last Name</label>
                            <input 
                             ref={register({ required: true })} 
                             value={lastname}
                              onChange={e => setlastname(e.target.value)}
                            type="text" 
                            name="lastname" 
                            className="form-control" />
                             {errors.lastname && <span className=" form-error text-danger mb-2">This field is required</span>}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="name" className="form-label">Gender *</label>
                            <select 
                              className="form-control"
                              ref={register({ required: true })}  
                              value={gender}
                              name="gender"
                              onChange={e => setgender(e.target.value)}
                              aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.gender && <span className=" form-error text-danger mb-2">This field is required</span>}
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="secondname" className="form-label">Date of Birth</label>
                            <input 
                            value={dateofBirth}
                            name="dateofBirth"
                            onChange={e => setdateofBirth(e.target.value)}
                            type="date" 
                            className="form-control" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="lastname" className="form-label">Email</label>
                            <input 
                            value={email}
                            onChange={e => setemail(e.target.value)}
                            type="email" 
                            name="email" 
                            className="form-control" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="name" className="form-label">Nationality</label>
                            <input 
                            value={nationality}
                            onChange={e => setnationality(e.target.value)}
                            name="nationality" 
                            type="text" 
                            className="form-control"  />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="religion" className="form-label">Religion</label>
                            <input 
                            type="text" 
                            name="religion"
                            value={religion}
                            onChange={e => setreligion(e.target.value)}
                            className="form-control" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <label for="lastname" className="form-label">Place of Birth</label>
                            <input 
                            type="text" 
                            name="placeofBirth" 
                            value={placeofBirth}
                            onChange={e => setplaceofBirth(e.target.value)}
                            className="form-control" />
                        </div>
                    </div>
          </div>
    )
}

export default Personalnfo
