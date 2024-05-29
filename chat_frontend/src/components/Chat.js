import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import axios from 'axios';

const Chat = () => {
    const [instruction, setInstruction] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/chat/', { instruction });
            setResponse(res.data.response);
            setChatHistory([...chatHistory, { user: instruction, model: res.data.response }]);
            setInstruction('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container maxWidth="md" style={{ marginTop: '5rem' }}>
            <Paper style={{ padding: '1.5rem', marginBottom: '2rem', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom style={{ color: '#333', fontFamily: 'Montserrat', marginBottom: '1.5rem' }}>
                    Chat with AI
                </Typography>
                <Box style={{ height: '500px', overflowY: 'auto', padding: '1rem' }}>
                    {chatHistory.map((chat, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                                <Typography variant="body1" component="p" style={{ backgroundColor: '#ffcdd2', padding: '1.5rem', borderRadius: '10px', maxWidth: '80%' }}>
                                    You: {chat.user}
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '0.5rem' }}>
                                <Typography variant="body1" component="p" style={{ backgroundColor: '#bbdefb', padding: '1.5rem', borderRadius: '10px', maxWidth: '80%' }}>
                                    Model: {chat.model}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </Box>

                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                    <TextField
                        label="Type your instruction here..."
                        variant="outlined"
                        fullWidth
                        value={instruction}
                        onChange={(e) => setInstruction(e.target.value)}
                        style={{ backgroundColor: '#ffffff' }}
                        InputLabelProps={{ style: { color: '#333' } }}
                        inputProps={{ style: { color: '#333' } }}
                    />
                    <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '1rem', borderRadius: '10px' }}>
                        Send
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default Chat;
