'use client';

import { Box, Typography } from '@mui/material';

interface TickerTapeProps {
  text: string;
}

export default function TickerTape({ text }: TickerTapeProps) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTop: '1px solid #00ff00',
        borderBottom: '1px solid #00ff00',
      }}
    >
      <Typography
        sx={{
          display: 'inline-block',
          paddingLeft: '100%',
          color: '#00ff00',
          fontFamily: '"Courier New", monospace',
          fontSize: '1rem',
          animation: 'scroll-left 20s linear infinite',
          '@keyframes scroll-left': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-100%)',
            },
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}