import './index.scss'

// next가 서버사이드렌더링 하기 위해 필요, 기본 공식처럼 있으니까 그냥 따라하면 된다.
const App=({Component, pageProps})=><Component {...pageProps} />

App.getInitialProps=async({ctx,Component})=>{
  const pageProps=await Component.getInitialProps?.(ctx)
  return {pageProps}
}

export default App