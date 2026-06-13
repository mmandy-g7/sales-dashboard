import { Box, Container } from '@mui/material'
import { pxToRem } from '../utils'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
  StyledUl,
} from '../components'

function Registration() {
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
            <StyledH1>Sign in</StyledH1>
            <StyledP>First, create an account</StyledP>
            <StyledUl>
              <li>Must contain 8 to 16 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
            </StyledUl>
          </Box>
          <FormComponent
            inputs={[
              { type: 'email', placeholder: 'Email' },
              { type: 'password', placeholder: 'Password' },
            ]}
            button={[{ className: 'primary', type: 'submit', text: 'Login' }]}
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

export default Registration
