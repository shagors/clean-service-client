import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <div>
            <div class="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16">
                <div div class="hero-content flex-col lg:flex-row" >
                    <div>
                        <p 
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='200'
                        className='text-xl'
                        >
                            Best Quality
                        </p>
                        <h1 
                        data-aos='fade-right' 
                        data-aos-delay='400'
                        data-aos-duration='1000' 
                        class="text-5xl font-bold"
                        >
                            Professional Cleaning Service
                        </h1>
                        <p 
                        data-aos='fade-right' 
                        data-aos-delay='600'
                        data-aos-duration='900' 
                        class="py-6 max-w-xl"
                        >
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                        </p>
                        <button
                        data-aos-delay='1300'
                        class="btn btn-primary"
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketgirl} class="h-full" alt='bucketgirl'/>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mx-auto mt-[-25px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6' >
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </div>
    );
};

export default Landing;