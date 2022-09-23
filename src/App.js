import React, { useEffect, useState } from 'react';

const url =
    'http://ec2-54-86-251-235.compute-1.amazonaws.com:8001/api/customers';

const App = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => data.customerList)
            .then(setCustomers);
    }, []);

    const customerListJsx = customers.map((c) => (
        <tr key={c.customerId}>
            <td>{c.companyName}</td>
            <td>{c.contactName}</td>
            <td>{c.contactTitle}</td>
            <td>{c.address}</td>
            <td>{c.city}</td>
            <td>{c.postalCode}</td>
            <td>{c.country}</td>
            <td>{c.phone}</td>
            <td>{c.fax}</td>
        </tr>
    ));

    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>Customer dashboard</h1>
                </div>
            </div>
            <div className='container'>
                <h3>List of custoemrs</h3>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Company name</th>
                            <th>Contact person</th>
                            <th>Contact title</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>Fax</th>
                        </tr>
                    </thead>
                    <tbody>{customerListJsx}</tbody>
                </table>
            </div>
        </>
    );
};

export default App;
