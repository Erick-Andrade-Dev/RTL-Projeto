import { screen, act } from "@testing-library/react"
import renderWithRouter from "./FunctionTest.js/renderWithRoute.js"
import App from "../App"

it('Teste a exibição do ErrorNotFound caso a rota inseriado seja uma inexistente/inválida', () => {
  const { history } = renderWithRouter(<App/>)

  act(() => {
    history.push('/testando-uma-pagina-inexistente')
  })

  const errorNotFound = screen.getByAltText(/notFound/i)
  const titleNotFound404 = screen.getByRole('heading', {
    name: /error notfound 404/i
  })
  expect(titleNotFound404).toBeInTheDocument();
  expect(errorNotFound).toHaveAttribute('alt', 'notFound');
})