import React from 'react'
import { Carousel, Card, Button,Avatar,Rating } from 'react-daisyui'
import * as CONSTANTS from '../../../../constants.jsx';

function DoctorCarousel() {

  type resultProps = {
    drName: string;
    img: string;
    rating: number;
    expertIn: string;
  };
  
  const buttonStyle = (value: string) => {
    return <Button size="xs">{value}</Button>
  }

  const args = { buttonStyle }

  return (
    <div>
      <Carousel {...args} className="rounded-box" display='sequential'>
        {
          CONSTANTS.ONLINE_DOCTORS[Object.keys(CONSTANTS.ONLINE_DOCTORS)].map((res: resultProps) => {
            return (
              <Carousel.Item className='justify-center'>
                <Card className='h-30 my-5 shadow-lg shadow-slate-400'>
                  <Card.Body className='flex flex-row items-center'>
                    <div className='flex items-center justify-center flex-col'>
                      <div className="flex flex-wrap ">
                          <Avatar
                            online={true}
                            size={50}
                            src={res.img}
                            shape='circle'
                          />
                      </div>
                      <Rating size='sm' color='warning' className='mt-5' value={res.rating}>
                        <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
                        <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
                        <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
                        <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
                        <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
                      </Rating>
                    </div>
                    <div className=' pl-1 flex flex-col'>
                      <span className='text-[12px]'>{res.drName}</span>
                      <span className='text-slate-400	text-[10px]'>{res.expertIn}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            )
          }
          )}

      </Carousel>
    </div>
  )
}
function DoctorsOnline() {
  return (
    <div className='flex justify-center flex-col mt-10 lg:mt-0'>
      <img className='w-100 object-contain h-16 w-100' alt='msg-image' src="https://assets.icliniq.com/v2/assets/images/message.svg" />
      <span className='text-sm text-center mt-2'>
        <span className='font-semibold text-sm'>2233</span> Doctors Online
      </span>
      <div className='mt-5 mb-1'>
        <DoctorCarousel />
      </div>

    </div>
  )
}

export default DoctorsOnline