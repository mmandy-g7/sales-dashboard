import { AvatarsList, CardComponent, Header } from '../components'
import { Container } from '@mui/material'
import { currencyConverter } from '../utils'

function Home() {
  const mockListData = [
    {
      avatar: '/alien-black.svg',
      name: 'Name Lastname 1',
      subtitle: currencyConverter(1608.04),
    },
    {
      avatar: '/alien-black.svg',
      name: 'Name Lastname 2',
      subtitle: currencyConverter(5944.12),
    },
    {
      avatar: '/alien-black.svg',
      name: 'Name Lastname 3',
      subtitle: currencyConverter(883.46),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
