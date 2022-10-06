import {screen} from '@testing-library/react'
import renderWithRouter from './FunctionTest.js/renderWithRoute'
// import userEvent from '@testing-library/user-event'
import Form from '../Formulario/Form'

describe('Testa o componente Form', () => {
  it('Verifica se o título é renderizado', () => {
    renderWithRouter(<Form />)

    const titleForm = screen.getByText(/Concorra a uma viagem para o Rio de Janeiro, coração do meu Brasil!!/i)
    expect(titleForm).toBeInTheDocument();
  })
})