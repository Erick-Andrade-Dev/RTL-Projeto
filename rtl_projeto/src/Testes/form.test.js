import { screen } from '@testing-library/react'
import renderWithRouter from './FunctionTest.js/renderWithRoute'
// import userEvent from '@testing-library/user-event'
import Form from '../Formulario/Form'

describe('Testa o componente Form', () => {
  it('Verifica se o título é renderizado', () => {
    renderWithRouter(<Form />)

    const titleForm = screen.getByText(/Concorra a uma viagem para o Rio de Janeiro, coração do meu Brasil!!/i)
    expect(titleForm).toBeInTheDocument();
  })
  
  it('Verifica se os inputs são renderizados', () => {
    renderWithRouter(<Form />)

    const inputFullName = screen.getByRole('textbox', {
      name: /digite seu nome/i
    })

    const inputEmail = screen.getByRole('textbox', {
      name: /digite seu e\-mail/i
    })

    const inputPassword = screen.getByLabelText(/digite sua senha/i)

    const checkbox = screen.getByRole('checkbox', {
      name: /deseja receber emails para concorrer a outras viagens\?/i
    })

    expect(inputFullName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  })

  it('Verifica se o botão "Concorrer!" é renderizado', () => {
    renderWithRouter(<Form />)

    const btnCompete = screen.getByRole('button', {
      name: /concorrer!/i
    })

    expect(btnCompete).toBeInTheDocument();
  })

  it('Verifica se o link "Voltar" é renderizado', () => {
    renderWithRouter(<Form />)

    const linkToBack = screen.getByRole('link', {
      name: /voltar/i
    })

    expect(linkToBack).toBeInTheDocument();
  })
})