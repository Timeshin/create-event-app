import { Route, Routes } from 'react-router-dom';

import { CreatePage, EventPage, LandingPage } from 'pages';
import PagesLayout from 'Layouts/PagesLayout/PagesLayout';

import 'styles/index.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PagesLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='event' element={<EventPage />} />
      </Route>
    </Routes>
  )
}

export default App;
