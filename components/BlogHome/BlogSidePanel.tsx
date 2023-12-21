import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  Link,
  Avatar,
} from '@mui/material';

import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IFrontMatter } from '../../pages/blog/[slug]';
import NextLink from 'next/link';
import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

interface IBlogSidePanel {
  posts: IFrontMatter[];
  tags?: string[];
  relatedTags?: string[];
  category?: string;
  categories: { [key: string]: { count: number; label: string } };
}

const BlogSidePanel = (props: IBlogSidePanel) => {
  const { tags, relatedTags, categories, category } = props;

  return (
    <Grid container>
      <Grid item xs={12} mb={3}>
        <Grid container mb={0}>
          <Grid item xs={12} mb={2}>
            <Box>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                Categories
              </Typography>
            </Box>
            <Divider
              sx={{
                color: 'primary.main',
                width: '100%',
                marginX: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <List sx={{ paddingTop: 0 }}>
              {Object.keys(categories || {}).map((key, index) => {
                const categoryDetails = categories[key];
                return (
                  <NextLink key={index} href={`/categories/${key}`} passHref>
                    <Link
                      color={'text.primary'}
                      sx={{ textDecoration: 'none' }}
                    >
                      <Grid container key={index} mb={1.2}>
                        <Grid item xs={10}>
                          <ListItem
                            key={index}
                            sx={{
                              padding: 0.2,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingTop: 0,
                            }}
                          >
                            <Typography
                              sx={{
                                '&:hover': {
                                  color: 'primary.main',
                                },
                                ...(category && category === key
                                  ? {
                                      color: 'primary.main',
                                    }
                                  : {}),
                              }}
                              variant={'body1'}
                            >
                              {categoryDetails.label}
                            </Typography>
                          </ListItem>
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              '&:hover': {
                                color: 'primary.main',
                              },
                              ...(category && category === key
                                ? {
                                    color: 'primary.main',
                                  }
                                : {}),
                            }}
                            variant={'body1'}
                          >
                            {categoryDetails.count}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Link>
                  </NextLink>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Grid container mb={2}>
          <Grid item xs={12} mb={2}>
            <Box>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                Tags
              </Typography>
            </Box>
            <Divider
              sx={{
                color: 'primary.main',
                width: '100%',
                marginX: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {(tags || []).map((tagStr, index) => {
              return (
                <NextLink key={index} href={`/tags/${tagStr}`} passHref>
                  <Link color={'text.primary'}>
                    <Chip
                      key={index}
                      label={tagStr}
                      sx={{
                        margin: 0.5,
                        borderRadius: 2,
                        height: '28px',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        ...(relatedTags && relatedTags.includes(tagStr)
                          ? {
                              color: 'primary.main',
                            }
                          : {}),
                        cursor: 'pointer',
                      }}
                    />
                  </Link>
                </NextLink>
              );
            })}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} mb={2}>
            <Box>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                Connect
              </Typography>
            </Box>
            <Divider
              sx={{
                color: 'primary.main',
                width: '100%',
                marginX: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 2,
                gap: 1.5,
              }}
            >
              <a
                href="https://www.github.com/priyath"
                target={'_blank'}
                rel="noreferrer"
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'background.icon',
                  }}
                >
                  <Box
                    color={'secondary.main'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FaGithubAlt size={'0.8em'} />
                  </Box>
                </Avatar>
              </a>
              <a
                href="https://www.linkedin.com/in/priyathg"
                target={'_blank'}
                rel="noreferrer"
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'background.icon',
                  }}
                >
                  <Box
                    color={'secondary.main'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FaLinkedinIn size={'0.8em'} />
                  </Box>
                </Avatar>
              </a>
              <a
                href="https://medium.com/@priyathgregory"
                target={'_blank'}
                rel="noreferrer"
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'background.icon',
                  }}
                >
                  <Box
                    color={'secondary.main'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FaMediumM size={'0.8em'} />
                  </Box>
                </Avatar>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogSidePanel;
