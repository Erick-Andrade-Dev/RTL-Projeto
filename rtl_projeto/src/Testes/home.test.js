import { screen, act } from '@testing-library/react'
import renderWithRouter from './FunctionTest.js/renderWithRoute'
import userEvent from '@testing-library/user-event'
import Home from '../Pages/Home'
import App from '../App'

describe('Verifica a renderização dos elementos no componente Home', () => {
  it('Verifica a renderização do título', () => {
    renderWithRouter(<Home />)

    const titleHome = screen.getByRole('heading', {
      name: /deseja concorrer a uma viagem dos sonhos\?/i
    })

    expect(titleHome).toBeInTheDocument();
  })

  it('Verifica a renderização do carrossel de imagens da cidade do RJ', async () => {
    renderWithRouter(<Home />)

    const carrosselImg = await screen.findByTestId('carrossel')

    expect(carrosselImg).toBeInTheDocument();
  })

  it('Verifica a renderização do link para poder concorrer a viagem', () => {
    renderWithRouter(<Home />)

    const registrationViagem = screen.getByRole('link', {
      name: /concorra a uma viagem ao rj!/i
    })
    
    expect(registrationViagem).toBeInTheDocument();
  })

  it('Verifica a renderização do link para ver o Pokemon', () => {
    renderWithRouter(<Home />)

    const toSeePokemon = screen.getByRole('link', {
      name: /se voce é um jogador de pokemon go, olha quem vôce irá encontrar no rj!/i
    })
    
    expect(toSeePokemon).toBeInTheDocument();
  })
})

describe('Verifica a navegação de rotas do componente Home', () => {

  it('Testa a navegação do componente Home para o componente Form', () => {
    const { history } = renderWithRouter(<Home />)

    const homeForForm = screen.getByRole('link', {
      name: /concorra a uma viagem ao rj!/i
    })

    userEvent.click(homeForForm);
    
    const componentForm = screen.getByRole('link', {
      name: /concorra a uma viagem ao rj!/i
    })
    expect(history.location.pathname).toBe('/form')
    expect(componentForm).toBeInTheDocument();
  })

  it('Testa a navegação do componente Home para o componente Pokemon', async () => {
    const { history } = renderWithRouter(<Home />)

    const homeFromPokeApi = screen.getByRole('link', {
      name: /se voce é um jogador de pokemon go, olha quem vôce irá encontrar no rj!/i
    })   

    userEvent.click(homeFromPokeApi); 

    expect(history.location.pathname).toBe('/pokeapi')    
 })  
})