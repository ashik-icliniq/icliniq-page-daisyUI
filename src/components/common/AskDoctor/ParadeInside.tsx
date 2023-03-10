import React from 'react'
import { Card, Button, Collapse } from 'react-daisyui'

function ParadeInside() {
  return (
    <div>
      <Card className='shadow-lg shadow-slate-400'>
        <Card.Body>
          <p className="mt-3 text-center">Ask your Liver queries to our experienced medical gastroenterologists and receive instant medical advice and second opinion.</p>
          <p className="mt-3 text-center">Our medical panel consists of over 50+ highly skilled medical gastroenterologists who specialized in Liver treatment.</p>
          <Collapse className='border border-base-300 bg-gray-200	 rounded-box mt-6' icon='arrow'>
            <Collapse.Title className="text-l font-medium">
              User Review
            </Collapse.Title>
            <Collapse.Content>
              A Responsive page for user review
            </Collapse.Content>
          </Collapse>
          <Collapse className='border border-base-300 bg-gray-200	 rounded-box' icon='arrow'>
            <Collapse.Title className="text-l  font-medium">
              About
            </Collapse.Title>
            <Collapse.Content>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Hair loss can be due to hormonal changes, heredity, or due to other underlying health conditions, and can affect the hair on the scalp or the entire body. Signs of hair loss are thinning of hair on the top of the head, bald spots, and excessive hair fall.
              </p>
            </Collapse.Content>
          </Collapse>
          <Collapse className='border border-base-300 bg-gray-200	 rounded-box' icon='arrow'>
            <Collapse.Title className="text-l font-medium">
              How it works?
            </Collapse.Title>
            <Collapse.Content>
              <ul className='list-disc leading-10 mx-5 mt-1'>
                <li>Your health issue will be shared across with our hair loss specialist panel.</li>
                <li>A hair loss specialist will pick your query and send medical advice to your health issue subsequently.</li>
                <li>You can then follow up with the same hair loss specialist.</li>
              </ul>
            </Collapse.Content>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ParadeInside