import React, {useState, useEffect} from 'react';
import Info from '../../components/userInfoTabs/UserInfo';
import StaffTabs from '../../components/userInfoTabs/StaffTabs'
import axios from '../../store/axios'
import {useParams} from 'react-router-dom'




function StaffDetails() {
    const [details, setdetails] = useState({});
    const { id} = useParams()

    useEffect(() => {
        axios.get(`/teachers/${id}`).then(res => {
            console.log(res)
              if(res.data.error){
                  console.log(res.data.error);
                  return 0
              }
              setdetails(res.data.teacher)
        })
    }, [id])



    return (
        <div>
            <h3>Staff Details</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <Info 
                        name={details?.name} 
                        surname={details?.surname} 
                        middleName={details?.middleName} 
                        role={details?.role} 
                        route="staff"
                        id={details?.userID}/>   
                </div>
                <div className="col-xs-12 col-sm-6 col-md-8">
                    <StaffTabs user={details}/>
                </div>
            </div>
           
        </div>
    )
}

export default StaffDetails
