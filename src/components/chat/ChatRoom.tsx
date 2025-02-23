import React from 'react';
import { Box, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Send, Mic } from '@mui/icons-material';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

const ChatRoom = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {/* Messages will be rendered here */}
      </Box>
      <Paper sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            sx={{ mr: 1 }}
          />
          <IconButton color="primary">
            <Mic />
          </IconButton>
          <IconButton color="primary">
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatRoom;
