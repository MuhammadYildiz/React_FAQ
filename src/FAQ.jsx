import React, { useState } from 'react'
export default function FAQ() {
    const [status1, setstatus1] = useState(false)
    const [status2, setstatus2] = useState(false)
    const [status3, setstatus3] = useState(false)
    const [status4, setstatus4] = useState(false)
    const [status5, setstatus5] = useState(false)
    return (
        <div className='bg-yellow-800 m-3 sm:m-28 p-5 flex flex-col justify-center items-center rounded-xl mb-10 shadow-2xl shadow-zinc-700 '>
            <h1 className='text-white text-3xl mb-5' >FAQ APP</h1>
            <div className='bg-white p-3 w-full '>
                <button className=' flex justify-between w-full bg-cyan-700 p-3 px-3 sm:px-10 text-white rounded-2xl text-2xl'
                    onClick={() => {
                        setstatus1(!status1)
                        setstatus2(false)
                        setstatus3(false)
                        setstatus4(false)
                        setstatus5(false)
                    }}
                >
                    <h2>1. What is HTML ?</h2>
                    <h2 className='text-3xl' >{status1 ? "-" : "+"}</h2>
                </button>
                {status1 && <p className='bg-zinc-700 p-3 text-white rounded-2xl'>
                    HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam cum ipsa voluptas cupiditate deleniti atque impedit blanditiis voluptate doloremque vel dolorum praesentium, maiores officia tenetur, facere totam odit earum!
                </p>}
            </div>
            <div className='bg-white p-3 w-full '>
                <button className=' flex justify-between w-full bg-cyan-700 p-3 px-3 sm:px-10 text-white rounded-2xl text-2xl'
                    onClick={() => {
                        setstatus2(!status2)
                        setstatus1(false)
                        setstatus3(false)
                        setstatus4(false)
                        setstatus5(false)
                    }}
                >
                    <h2>2. What is CSS ?</h2>
                    <h2 className='text-3xl' >{status2 ? "-" : "+"}</h2>
                </button>
                {status2 && <p className='bg-zinc-700 p-3 text-white rounded-2xl'>
                    CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam cum ipsa voluptas cupiditate deleniti atque impedit blanditiis voluptate doloremque vel dolorum praesentium, maiores officia tenetur, facere totam odit earum!
                </p>}
            </div>
            <div className='bg-white p-3 w-full '>
                <button className=' flex justify-between w-full bg-cyan-700 p-3 px-3 sm:px-10 text-white rounded-2xl text-2xl'
                    onClick={() => {
                        setstatus3(!status3)
                        setstatus1(false)
                        setstatus2(false)
                        setstatus4(false)
                        setstatus5(false)
                    }}
                >
                    <h2>3. What is JS ?</h2>
                    <h2 className='text-3xl' >{status3 ? "-" : "+"}</h2>
                </button>
                {status3 && <p className='bg-zinc-700 p-3 text-white rounded-2xl'>
                    JS Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam cum ipsa voluptas cupiditate deleniti atque impedit blanditiis voluptate doloremque vel dolorum praesentium, maiores officia tenetur, facere totam odit earum!
                </p>}
            </div>
            <div className='bg-white p-3 w-full '>
                <button className=' flex justify-between w-full bg-cyan-700 p-3 px-3 sm:px-10 text-white rounded-2xl text-2xl'
                    onClick={() => {
                        setstatus4(!status4)
                        setstatus2(false)
                        setstatus3(false)
                        setstatus1(false)
                        setstatus5(false)
                    }}
                >
                    <h2>4. What is React ?</h2>
                    <h2 className='text-3xl' >{status4 ? "-" : "+"}</h2>
                </button>
                {status4 && <p className='bg-zinc-700 p-3 text-white rounded-2xl'>
                    React Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam cum ipsa voluptas cupiditate deleniti atque impedit blanditiis voluptate doloremque vel dolorum praesentium, maiores officia tenetur, facere totam odit earum!
                </p>}
            </div>
            <div className='bg-white p-3 w-full '>
                <button className=' flex justify-between w-full bg-cyan-700 p-3 px-3 sm:px-10 text-white rounded-2xl text-2xl'
                    onClick={() => {
                        setstatus5(!status5)
                        setstatus2(false)
                        setstatus3(false)
                        setstatus4(false)
                        setstatus1(false)
                    }}
                >
                    <h2>5. What is PHP ?</h2>
                    <h2 className='text-3xl ml-3' >{status5 ? "-" : "+"}</h2>
                </button>
                {status5 && <p className='bg-zinc-700 p-3 text-white rounded-2xl'>
                    PHP Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam cum ipsa voluptas cupiditate deleniti atque impedit blanditiis voluptate doloremque vel dolorum praesentium, maiores officia tenetur, facere totam odit earum!
                </p>}
            </div>

        </div>
    )
}
