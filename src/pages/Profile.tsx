import { useContext } from 'react'
import { CardComponent, Header, StyledButton } from '../components'
import { AppThemeContext } from '../context/AppThemeContext'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton
          className="primary"
          onClick={() => themeContext?.toggleTheme?.()}
        >
          Switch theme {themeContext?.appTheme === 'light' ? 'dark' : 'light'}
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Profile
