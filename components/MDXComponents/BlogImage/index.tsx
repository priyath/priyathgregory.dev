import Image from 'next/image';
import * as React from 'react';
import { Box } from '@mui/material';
import ImageOverlay from './ImageOverlay';

const BlogImage = (props: any) => {
  const { src, width, height } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          fontSize: 14,
          marginY: { xs: 3, md: 4 },
          padding: { xs: 0, md: 2 },
          width: {
            sm: '100%',
            xs: 'calc(100vw - 48px)',
          },
          maxHeight: '95vh',
          backgroundColor: 'rgba(255, 255, 255, .05)',
          overflow: 'hidden', // Prevent unwanted overflow
        }}
        onClick={handleOpen} // Open overlay on click
      >
        <Image
          src={src}
          alt="blog image"
          layout="responsive" // Maintain responsive layout
          width={width || 1000} // Default width value (for aspect ratio)
          height={height || 800} // Default height value (for aspect ratio)
          quality={100}
          objectFit="contain" // Maintain aspect ratio within the given width and height
          style={{
            width: '100%',
            height: 'auto', // Allow height to adjust automatically
          }}
        />
      </Box>

      {/* Overlay for full-screen view */}
      <ImageOverlay src={src} open={open} onClose={handleClose} />
    </>
  );
};

export default BlogImage;
