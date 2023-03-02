import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>

            <p className='text-white text-xl font-extralight'>
                Thursday, 2 March 2023 | Local Time: 2:52 PM
            </p>

        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                St. Louis, MO
            </p>

        </div>
    </div>
  )
}

export default TimeAndLocation