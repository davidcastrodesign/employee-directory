import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';
import Listings from './Listings';

function listingContainer() {
    const {employees} = useContext(EmployeeContext);
    const employeesData = employees;
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Dob</th>
                </thead>
                {employeesData.map((employee) => {
                    return (
                        <Listings
                        image={employees.image}
                        name={employees.name}
                        phone={employees.phone}
                        email={employees.email}
                        dob={employees.dob}
                        />
                    )
                })}
            </table>
        </div>
    )
}

export default listingContainer;