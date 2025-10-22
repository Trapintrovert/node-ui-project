import { React } from 'react'
import './index.css'
export default function App() {
  return (
    <>
      <p style={{"fontSize":16,"fontWeight":400,"lineHeight":1.4,"color":"#000"}}>Pin pin pim pim</p>
      <button variant="primary" disabled={false} style={{"padding":"8px 16px","fontSize":14,"fontWeight":500,"borderRadius":4,"backgroundColor":"#3b82f6","color":"#ffffff","border":"none","cursor":"pointer"}}>Really?</button>
    </>
  )
}