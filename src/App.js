import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './config'

const App = () => {
    const [players, setPlayers] = useState(null)

    useEffect(() => {
        const getStartupData = async () => {
            const res = await axios.get(`${API_URL}/search?q=Baitedz`)
            setPlayers(res.data)
        }
        getStartupData()
    }, [])
    return (
        <div>
            <h2>All players with Baited in their name:</h2>
            <div>
                {players !== null
                    ? players.map((dude, key) => (
                          <div key={key}>
                              <div>{dude.personaname}</div>
                              <img src={dude.avatarfull} alt="player" />
                          </div>
                      ))
                    : null}
            </div>
        </div>
    )
}

export default App
