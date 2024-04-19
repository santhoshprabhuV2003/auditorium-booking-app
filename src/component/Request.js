import React , { useState } from 'react';
import { Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Request.css';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
});

const textStyle = {
    marginBottom: 2
};

const Request = () => {
    const API_URL = 'https://t0v8qty4zi.execute-api.ap-south-1.amazonaws.com/Dev/requests';

    const [formData, setFormData] = useState({
        facultyName: '',
        email: '',
        department: '',
        auditorium: '',
        dateOfEvent: '',
        eventName: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, formData);
            if (response.data.Operation === 'SAVE' && response.data.Message === 'SUCCESS') {
                alert("Request for Auditorium submitted successfully!!");
                setFormData({
                    facultyName: '',
                    email: '',
                    department: '',
                    auditorium: '',
                    dateOfEvent: '',
                    eventName: '',
                });
            } else {
                alert("Error submitting request!!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return(
        <ThemeProvider theme={theme}>
            <section className='request-container'>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField type="text" label="Faculty Name" placeholder="Enter your Name" variant="outlined" fullWidth required sx={textStyle} name="facultyName" value={formData.facultyName} onChange={handleChange}/>
                            <TextField type="email" label="Faculty Email" placeholder="Enter your Email" variant="outlined" fullWidth required sx={textStyle} name="email" value={formData.email} onChange={handleChange}/>
                            <FormControl variant="outlined" fullWidth required sx={textStyle}>
                                <InputLabel>Department</InputLabel>
                                <Select label="Department" name="department" value={formData.department} onChange={handleChange}>
                                    <MenuItem value="IT">IT</MenuItem>
                                    <MenuItem value="CSE">CSE</MenuItem>
                                    <MenuItem value="ECE">ECE</MenuItem>
                                    <MenuItem value="EEE">EEE</MenuItem>
                                    <MenuItem value="CIVIL">CIVIL</MenuItem>
                                    <MenuItem value="CSBS">CSBS</MenuItem>
                                    <MenuItem value="MECH">MECH</MenuItem>
                                    <MenuItem value="MECT">MECT</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" fullWidth required sx={textStyle}>
                                <InputLabel>Auditorium</InputLabel>
                                <Select label="Auditorium"  name="auditorium" value={formData.auditorium} onChange={handleChange}>
                                    <MenuItem value="KM">KM</MenuItem>
                                    <MenuItem value="KS">KS</MenuItem>
                                    <MenuItem value="Open Auditorium">Open Auditorium</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField type="date" variant="outlined" fullWidth required sx={textStyle} name="dateOfEvent" value={formData.dateOfEvent} onChange={handleChange}/>
                            <TextField type="text" label="Event Name" placeholder="Enter Event Name" variant="outlined" fullWidth required sx={textStyle} name="eventName" value={formData.eventName} onChange={handleChange}/>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </ThemeProvider>
    )
}

export default Request;