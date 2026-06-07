import { Box, Container } from '@mui/material'
import { BannerImage } from '../components/BannerImage'

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '1 1 50%',
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          minWidth: 0,
        }}
      >
        <Container maxWidth="sm">
          <h1>LOGIN</h1>
        </Container>
      </Box>
      <Box
        sx={{
          flex: '1 1 50%',
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          minWidth: 0,
        }}
      >
        <BannerImage />
      </Box>
    </Box>
  )
}

export default Login
