import ImagePage from './components/ImagePage'
import FormPage from './components/FormPage'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className='image-form-container'>
      <ImagePage />
      <FormPage />
    </div>
    <img
      src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1719997747/nozuz1tk5jo6hvsatvda.png"
      alt="footer"
      className='footer-image'
    />
  </div>
)

export default App