import {screen} from '@testing-library/react'
import renderWithRouter from './FunctionTest.js/renderWithRoute'
import userEvent from '@testing-library/user-event'
import Pokemon from '../PokeApi/Pokemon'

describe('Testa a renderização dos elementos no componente Pokemon', () => {
  it('Verfica se o nome do pokemon é renderizado', async() => {
    renderWithRouter(<Pokemon />)

    const namePokemon = await screen.findByRole('heading', {
      name: /nome: mewtwo/i,
      level: 1
    })

    expect(namePokemon).toBeInTheDocument();
  })  

  it('Verifica se o tipo do pokemon é renderizado', async() => {
    renderWithRouter(<Pokemon/>)

    const typePokemon = await screen.findByRole('heading', {
      name: /tipo: psychic/i
    })

    expect(typePokemon).toBeInTheDocument();                                                            
  })           

  it('Verifica se a imagem do pokemon é renderizada', async () => {
    renderWithRouter(<Pokemon />)

    const imagemPokeApi = await screen.findByRole('img', {
      name: /pokemon/i
    })

    expect(imagemPokeApi).toBeInTheDocument();
  })

  it('Verifica se o botão de voltar é renderizado', () => {
    renderWithRouter(<Pokemon />)

    const btnPokeApi = screen.getByRole('link', {
      name: /voltar/i
    })

    expect(btnPokeApi).toBeInTheDocument();
  })
})

describe('Testa a navegação do componente Pokemon para o componente Home', () => {
  it('Verifica a navegação para o componente Home', () => {
    const { history } = renderWithRouter(<Pokemon />)

    const backToHome = screen.getByRole('link', {
      name: /voltar/i
    })

    userEvent.click(backToHome)
    expect(history.location.pathname).toBe("/")
  })
})
