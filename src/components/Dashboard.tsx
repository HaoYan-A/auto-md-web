'use client';

import { useSession, signOut } from 'next-auth/react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Avatar,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import {
  Description as DescriptionIcon,
  Add as AddIcon,
  ExitToApp as ExitToAppIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

export default function Dashboard() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      {/* App Bar */}
      <AppBar
        position="static"
        elevation={1}
        sx={{ bgcolor: 'white', color: 'text.primary' }}
      >
        <Toolbar>
          <DescriptionIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            Auto MD && Jira SP
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={session?.user?.image || undefined}
              alt={session?.user?.name || '用户'}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="body2">{session?.user?.name}</Typography>
            <Button
              color="inherit"
              onClick={handleSignOut}
              startIcon={<ExitToAppIcon />}
              sx={{ ml: 2 }}
            >
              退出
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Welcome Section */}
        <Paper sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                欢迎回来, {session?.user?.name}! 👋
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                开始协作编写和管理您的 Markdown 文档
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              新建文档
            </Button>
          </Box>
        </Paper>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ color: 'primary.main' }}>
                    <DescriptionIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div">
                      12
                    </Typography>
                    <Typography color="text.secondary">我的文档</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ color: 'success.main' }}>
                    <PeopleIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div">
                      8
                    </Typography>
                    <Typography color="text.secondary">协作者</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ color: 'warning.main' }}>
                    <TrendingUpIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div">
                      156
                    </Typography>
                    <Typography color="text.secondary">共识数</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ color: 'info.main' }}>
                    <DescriptionIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div">
                      24
                    </Typography>
                    <Typography color="text.secondary">待处理</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Documents */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                最近文档
              </Typography>
              <Stack spacing={2}>
                {[
                  {
                    title: '项目需求文档',
                    status: '进行中',
                    updated: '2小时前',
                  },
                  { title: 'API 设计规范', status: '已完成', updated: '1天前' },
                  { title: '用户指南', status: '待审核', updated: '3天前' },
                ].map((doc, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'grey.50',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <DescriptionIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle1">{doc.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          更新于 {doc.updated}
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip
                      label={doc.status}
                      size="small"
                      color={
                        doc.status === '已完成'
                          ? 'success'
                          : doc.status === '进行中'
                            ? 'primary'
                            : 'warning'
                      }
                      variant="outlined"
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                快速操作
              </Typography>
              <Stack spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  创建新文档
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<PeopleIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  邀请协作者
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<TrendingUpIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  查看统计
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
