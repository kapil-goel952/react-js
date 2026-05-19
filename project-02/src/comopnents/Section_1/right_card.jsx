import React from 'react'

const right_card = ({ user }) => {
    console.log(user, "cards");

    return (
        <div
            className='h-full(1/4) relative shrink-0 w-78 bg-cover bg-center mx-6 my-6  rounded-4xl '
            style={{
                backgroundImage: `url(${user.img})`,
            }}
        >
            <p className='m-10 items-center h-10 w-10 flex justify-center bg-white rounded-full'>{user.id}</p>

            <div className=' absolute bottom-0 left-0  p-8 flex flex-col   justigy-between'>
                <p className='text-medium font-bold leading-4 text-black mb-10'>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit distinctio praesentium iste aut? Ipsum, eum necessitatibus officia modi est cumque unde obcaecati architecto autem maxime, saepe atque vitae quisquam voluptate odit corrupti repellendus accusantium aspernatur! Ex repellat temporibus reprehenderit?
                </p>

                <div className='flex justify-between'>
                    <button className='text-white bg-blue-600 font-medium px-8  py-2 rounded-full'>
                        satisfied
                    </button>

                    <button className='text-white bg-blue-600 font-medium px-8  py-2 rounded-full'>
                        "-"
                    </button>

                </div>
            </div>
        </div>
    )
}

export default right_card