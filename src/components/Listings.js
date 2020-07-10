import React from 'react';

function Listings ({ image, name, phone, email, dob }) {
    return(
        <tbody>
            <tr>
            <td>{image}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
            </tr>
        </tbody>
    );
}

export default Listings;