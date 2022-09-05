import styled from 'styled-components'
import { GlobalStyle } from '../styles/globalstyles'

const StyledApp = styled.div``

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledApp>
        <GlobalStyle />

        <Component {...pageProps} />
      </StyledApp>
    </>
  )
}

export default MyApp
