import { BrowserRouter,Route,Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {routes.map((route,index) => {
            const Page = route.page;
            const Layout = route.layout;
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}></Route>
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
