import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function App() {
  return (
    <div>
      <header style={{padding:20, borderBottom:'1px solid #ddd'}}>
        <h2>Střechy Proděc</h2>
      </header>

      <section style={{padding:40}}>
        <h1>Pokrývačské služby</h1>
        <p>Znojmo a široké okolí</p>
      </section>

      <section style={{padding:40, background:'#f5f5f5'}}>
        <h2>Služby</h2>
        <ul>
          <li>Pokrývačské práce</li>
          <li>Montáž střech</li>
          <li>Opravy střech</li>
        </ul>
      </section>

      <section style={{padding:40}}>
        <h2>Kontakt</h2>
        <p><Phone size={16}/> 601 343 327</p>
        <p><Mail size={16}/> strechyprodec@seznam.cz</p>
        <p><MapPin size={16}/> Znojmo a okolí</p>
      </section>
    </div>
  )
}
