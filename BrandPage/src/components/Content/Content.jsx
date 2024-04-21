import React from 'react'

export default function Content() {
  return (
    <main className='content container'>
        <div className='main-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
                <div className='content-button'>
                    <button className='btn primary-button'>Shop Now</button>
                    <button className='btn secondary-button'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also available on</p>
                    <div className='shopping-brands'>
                        <img src="/images/flipkart.png" alt="flipkart"/>
                        <img src="/images/amazon.png" alt="amazon"/>
                    </div>
                </div>
        </div>
        <div className='content-image'>
            <img src="/images/shoe_image.png" alt="shoe_image"/>
        </div>

    </main>
  )
}
