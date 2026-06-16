import {
  AvatarsList,
  CardComponent,
  CustomTable,
  CustomChart,
  Header,
} from '../components'
import { Container } from '@mui/material'
import { currencyConverter } from '../utils'

function Home() {
  const mockListData = [
    {
      avatar: '/alien-circle.png',
      name: 'Name Lastname 1',
      subtitle: currencyConverter(1608.04),
    },
    {
      avatar: '/alien-circle.png',
      name: 'Name Lastname 2',
      subtitle: currencyConverter(5944.12),
    },
    {
      avatar: '/alien-circle.png',
      name: 'Name Lastname 3',
      subtitle: currencyConverter(883.46),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
            data={[1000.12, 2456.54, 986.32, 654.89, 324.78, 1009.33]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
