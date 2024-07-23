import React, { useState, useEffect } from 'react';
import "./Home.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableCell, TableHead, TableRow, TableBody, Button, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
}); 

const Admin = () => {
    const API_URL = 'https://t0v8qty4zi.execute-api.ap-south-1.amazonaws.com/Dev/requests';

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(API_URL);
                setRequests(response.data.requests);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
    }, []);

    const handleStatusChange = async (event,requestId) => {
        const newStatus = event.target.value;
        const updatedRequests = requests.map(request => {
            if (request.requestId === requestId) {
                return { ...request, status: newStatus };
            }
            return request;
        });
        setRequests(updatedRequests);
    };

    const handleUpdate = async (event, request) => {
        try {
            const response = await axios.put(API_URL, request);
            if (response.status == 200) {
                alert(`Request ${request.requestId} status updated successfully!!`);
            } else {
                alert("Error updating request status!!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return(
        <ThemeProvider theme={theme}>
            <section className='body'>
                <div className='container'>
                    <div className='table-container'>
                        <h2>Admin</h2>  
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Faculty Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Department</TableCell>
                                    <TableCell>Auditorium</TableCell>
                                    <TableCell>Date of Event</TableCell>
                                    <TableCell>Event Name</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    requests.map(request => (
                                        <TableRow key={request.requestId}>
                                            <TableCell component="th" data-label="Faculty Name">{request.facultyName}</TableCell>
                                            <TableCell component="th" data-label="Email">{request.email}</TableCell>
                                            <TableCell component="th" data-label="Department">{request.department}</TableCell>
                                            <TableCell component="th" data-label="Auditorium">{request.auditorium}</TableCell>
                                            <TableCell component="th" data-label="Date of Event">{request.dateOfEvent}</TableCell>
                                            <TableCell component="th" data-label="Event Name">{request.eventName}</TableCell>
                                            <TableCell component="th" data-label="Status">
                                                <Select value={request.status} onChange={(event) => handleStatusChange(event, request.requestId)} variant="outlined">
                                                    <MenuItem value="Requested">Requested</MenuItem>
                                                    <MenuItem value="Approved">Approved</MenuItem>
                                                    <MenuItem value="Not Approved">Not Approved</MenuItem>
                                                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                                                </Select>
                                            </TableCell>
                                            <TableCell component="th" data-label="Action"><Button variant='contained' color="primary" onClick={(event) => handleUpdate(event, request)}>Update</Button></TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default Admin;