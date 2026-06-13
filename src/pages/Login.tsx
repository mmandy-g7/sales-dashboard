import { Box, Container } from '@mui/material'
import { pxToRem } from '../utils'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '../components'

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
          <Box sx={{ marginBottom: pxToRem(24) }}>
            <Logo height={42} width={42} />
          </Box>
          <Box sx={{ marginBottom: pxToRem(24) }}>
            <StyledH1>WELCOME!</StyledH1>
            <StyledP>Please login to your account</StyledP>
          </Box>
          <FormComponent
            inputs={[
              { type: 'email', placeholder: 'Email' },
              { type: 'password', placeholder: 'Password' },
            ]}
            button={[
              {
                className: 'primary',
                type: 'submit',
                children: 'Login',
                disabled: true,
              },
            ]}
            message={{
              msg: 'Success!',
              type: 'success',
            }}
          />
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
