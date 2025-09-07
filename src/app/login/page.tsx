'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: '/' });
  };

  if (status === 'loading') {
    return (
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Typography>加载中...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Stack spacing={3} alignItems="center">
            <Box display="flex" alignItems="center" gap={2}>
              <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h4" component="h1" fontWeight="bold">
                Auto MD && Jira SP
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              onClick={handleGithubLogin}
              sx={{
                mt: 3,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              使用 GitHub 登录
            </Button>

          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
