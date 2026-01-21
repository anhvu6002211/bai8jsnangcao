import { useState } from 'react'
import './App.css'

const profiles = [
  { 
    id: 1, 
    name: 'Alexa', 
    username: '@alexa99',
    description: "I'll help you buy stuff off Amazon",
    image: 'https://img.icons8.com/color/480/amazon-alexa-logo.png',
    bgColor: '#00A4E4'
  },
  { 
    id: 2, 
    name: 'Cortana', 
    username: '@cortana12',
    description: 'Personal assistant by Microsoft',
    image: 'https://img.icons8.com/color/480/cortana.png',
    bgColor: '#FFFFFF'
  },
  { 
    id: 3, 
    name: 'Siri', 
    username: '@siri44',
    description: "I don't get a lot of updates anymore",
    image: 'https://img.icons8.com/color/480/siri.png',
    bgColor: '#000000'
  },
]

function App() {
  return (
    <div className="app">
      <div className="cards-container">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="profile-image" style={{ backgroundColor: profile.bgColor }}>
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-username">{profile.username}</p>
              <p className="profile-description">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App