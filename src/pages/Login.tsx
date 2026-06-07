import styled from 'styled-components'

const LoginArea = styled.div`
  background: #fff;
`
const LoginImage = styled.div`
  background-image: url('public/bg.jpg');
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Login() {
  return (
    <>
      <LoginArea>LOGIN</LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
