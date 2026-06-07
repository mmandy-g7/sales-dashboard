import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #fff;
`
const RegistrationImage = styled.div`
  background-image: url('public/bg.jpg');
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Registration() {
  return (
    <>
      <RegistrationArea>REGISTRATION</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
