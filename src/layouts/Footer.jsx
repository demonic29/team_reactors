import React from 'react'

export default function Footer() {

    const logo = require('../assets/rekiteku-logo.png')

  return (
    <div className=' bg-primaryColor mt-[100px] p-[100px]'>
        <div className='container flex justify-evenly'>
            <div className='flex items-center gap-10'>
                <img 
                    srcSet={`${logo}`} 
                    alt="rekiteku-logo" 
                />
                <p className='text-xl font-bold text-white'>歴てく -INSIDE-</p>

                <div>

                </div>
            </div>

            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <span className='text-slate-300'>メール</span>
                    <p className='text-white'>yuki3086ny4403sdm@icloud.com</p>
                </div>
                <div>
                    <span className='text-slate-300'>電話番号</span>
                    <p className='text-white'>090-2395-2427</p>
                </div>
                <div>
                    <span className='text-slate-300'>住所</span>
                    <p className='text-white'>福岡市西区横浜３丁目２７－１５</p>
                </div>
            </div>
        </div>
    </div>
  )
}
