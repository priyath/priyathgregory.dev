import * as React from 'react';
import { Box, Modal } from '@mui/material';
import Image from 'next/image';

interface ImageOverlayProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ src, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '90vw',
          height: '90vh',
          maxWidth: '90vw',
          maxHeight: '90vh',
          backgroundColor: 'transparent', // Fully transparent background
          padding: 2,
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #e0e0e0', // Light grey border
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for better visibility
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={src}
            alt="enlarged blog image"
            layout="fill"
            quality={100}
            objectFit="contain"
            style={{
              borderRadius: '8px',
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageOverlay;
