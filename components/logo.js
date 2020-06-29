import React, { useState, useEffect } from 'react'
import random from 'lodash/random'

const colors = [
  '#00aeff',
  '#69b200',
  '#39c5bb',
  '#2aa8b0',
  '#ffb1d5',
  '#ff07f2'
]

const generateGradient = () => {
  const gradients = []
  for (let i = 0; i < random(1, colors.length - 1); i++) {
    gradients.push(`
      radial-gradient(ellipse farthest-corner at
      ${random(-100, 100)}% ${random(-100, 100)}%,
      ${colors[random(0, colors.length - 1)]},
      transparent)`
    )
  }
  return gradients.join(', ')
}

const Logo = () => {
  const [gradient, setGradient] = useState('')
  useEffect(() => {
    setGradient(generateGradient())
  }, [])
  return (
    <div className='backing center dib ma0 w5 h5'>
      <div
        className='mask w5 h5 bg-white'
        style={{
          backgroundImage: gradient,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}
      />
      <style jsx>
        {`
          .backing {
            background-color: #000;
          }
          .mask {
            mask-image: url(/static/mask-icon.svg);
          }
          @media (prefers-color-scheme: light) {
            .backing {
              background-color: #fff;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Logo
