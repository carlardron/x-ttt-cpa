'use client';

import { useState } from 'react';
import { Button, Container, Box, Typography } from '@mui/material';
import GameIframe from './components/GameIframe';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.03) 3px)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              color: '#00ff00',
              fontFamily: '"Courier New", monospace',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              textShadow: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.4)',
              letterSpacing: '0.1em',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  textShadow: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.4)',
                },
                '50%': {
                  textShadow: '0 0 30px rgba(0, 255, 0, 1), 0 0 60px rgba(0, 255, 0, 0.6)',
                },
              },
            }}
          >
            SHALL WE PLAY A GAME?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              color: '#00cc00',
              fontFamily: '"Courier New", monospace',
              fontSize: { xs: '0.9rem', sm: '1.1rem' },
              opacity: 0.8,
              letterSpacing: '0.05em',
            }}
          >
            CLASSIC TIC-TAC-TOE :: MULTIPLAYER READY
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => setShowGame(true)}
            sx={{
              backgroundColor: '#00ff00',
              color: '#000000',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              padding: { xs: '15px 30px', sm: '20px 50px' },
              fontFamily: '"Courier New", monospace',
              fontWeight: 700,
              letterSpacing: '0.05em',
              border: '3px solid #00ff00',
              borderRadius: '0px',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#00cc00',
                transform: 'scale(1.05)',
                boxShadow: '0 0 40px rgba(0, 255, 0, 0.8), inset 0 0 30px rgba(0, 255, 0, 0.2)',
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            Do you want to play a game?
          </Button>

          <Box
            sx={{
              mt: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              opacity: 0.6,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#00ff00',
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
              }}
            >
              [ SYSTEM READY ]
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#00ff00',
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
              }}
            >
              [ AWAITING INPUT... ]
            </Typography>
          </Box>
        </Box>
      </Container>

      {showGame && <GameIframe onClose={() => setShowGame(false)} />}
    </Box>
  );
}
