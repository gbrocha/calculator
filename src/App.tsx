import { FunctionComponent } from 'react'
import { Calculator } from 'components/Calculator'
import './index.css'

const App: FunctionComponent = () => {
  return (
    <div className="app-root">
      <Calculator />
    </div>
  )
}

export default App
