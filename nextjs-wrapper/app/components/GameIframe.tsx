'use client';

import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface GameIframeProps {
  onClose: () => void;
}

export default function GameIframe({ onClose }: GameIframeProps) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: '#00ff00',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
        aria-label="close game"
      >
        <CloseIcon sx={{ fontSize: 40 }} />
      </IconButton>
      
      <Box
        sx={{
          width: '90vw',
          height: '90vh',
          maxWidth: '1400px',
          maxHeight: '900px',
          border: '3px solid #00ff00',
          boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="/game/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Tic Tac Toe Game"
        />
      </Box>
    </Box>
  );
}
