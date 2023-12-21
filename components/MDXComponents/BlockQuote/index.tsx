import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface IBlockQuote {
  children: any;
}

const BlockQuote = (props: IBlockQuote) => {
  return (
    <Box
      sx={{
        mt: 4,
        marginLeft: { xs: 0, md: 4 },
        paddingLeft: 2,
        borderLeft: 'solid #54B689 2px',
        fontStyle: 'italic',
      }}
    >
      <Typography
        color={'#54B689'}
        variant={'h6'}
        sx={{ fontWeight: 'bold', marginBottom: 2 }}
      >
        Note
      </Typography>
      {props.children}
    </Box>
  );
};

export default BlockQuote;
