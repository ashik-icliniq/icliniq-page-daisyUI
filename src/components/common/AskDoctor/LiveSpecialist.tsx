import React from 'react'
import { Card, Button, Textarea } from 'react-daisyui'

function LiveSpecialist() {
    return (
        <div>
            <Card className='shadow-lg shadow-slate-300'>
                <Card.Body>
                    <h5 className="text-2xl my-2 font-bold tracking-tight text-gray-900 dark:text-white">
                        Ask a 'Liver Specialist' Online
                    </h5>
                    <p className=" mt-5 font-semibold text-gray-700 dark:text-gray-400">
                        Enter your Health Query
                    </p>
                    <Textarea color='accent' placeholder='Enter your query'/>
                    <Card.Actions className="justify-start mt-4">
                        <Button color="info" className='text-white w-full lg:w-auto '>Submit</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LiveSpecialist