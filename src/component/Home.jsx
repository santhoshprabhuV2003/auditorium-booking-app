import React, { useState, useEffect } from 'react';
import "./Home.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
}); 

const Home = () => {
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

    const deleteRequest = async (reqId) => {
        try {
            const response = await axios.delete(`${API_URL}?id=${reqId}`);
            if (response.status === 200) {
              setRequests(requests.filter((req) => req.requestId !== reqId));
            } else {
              console.error('Error deleting request:', response.data);
            }
        } catch (error) {
            console.error('Error deleting request:', error);
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <section className='body'>
                <div className='container'>
                    <div className='table-container'>
                        <h2>Requests</h2>  
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
                                            <TableCell component="th" data-label="Status">{request.status}</TableCell>
                                            <TableCell component="th" data-label="Action"><Button variant='contained' color='error' onClick={() => deleteRequest(request.requestId)}>Delete</Button></TableCell>
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

export default Home;