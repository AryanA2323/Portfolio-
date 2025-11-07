import React from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

export default function ParticlesBackground(){
  const options = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 40 },
      color: { value: ['#00ADB5', '#BB86FC'] },
      links: { enable: true, color: '#ffffff', opacity: 0.08 },
      move: { enable: true, speed: 1 },
      size: { value: { min: 1, max: 3 } }
    }
  }

  const init = async (engine) => {
    await loadFull(engine)
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-70">
      <Particles init={init} options={options} />
    </div>
  )
}
