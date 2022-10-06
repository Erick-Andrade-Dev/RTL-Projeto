import {screen} from '@testing-library/react'
import renderWithRouter from './FunctionTest.js/renderWithRoute'
// import userEvent from '@testing-library/user-event'
import Form from '../Formulario/Form'
import Pokemon from '../PokeApi/Pokemon'

describe('Testa o componente Pokemon', () => {
  it('Verfica se o nome do pokemon é renderizado', () => {
    renderWithRouter( <Pokemon/> )

    const namePokemon = screen.getByRole('heading', {
      name: /nome: mewtwo/i
    })

    expect(namePokemon).toBeInTheDocument();
  })  
})
