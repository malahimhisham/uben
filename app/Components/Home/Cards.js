import React from 'react';
import { IoStarSharp } from "react-icons/io5";

const Cards = () => {
    return (
        <>
            <div className='mt-12 bg-white mb-20'>
                <div className='mx-8 md:mx-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>

                    {/* Card 1 */}
                    <div
                        style={{ backgroundImage: 'linear-gradient(135deg, #eef2ff, #fff 50%, #fafafa)' }}
                        className='px-6 sm:px-8 md:px-16 py-8 rounded-3xl shadow-lg hover:scale-105 transition-transform ease-in-out transform translate-x-0 opacity-100 animate-[slideIn_1s_ease-out]'>
                        <p className='text-gray-600 text-lg animate-[fadeIn_2s_ease-in-out]'>
                            I downloaded several apps and kept only the best ones. And I think Üben is one of them.
                        </p>

                        <div className='mt-6 flex justify-between items-center'>
                            <h4 className="font-semibold text-lg text-gray-800 animate-[fadeIn_2s_ease-in-out]">Abir, Morocco</h4>
                            <div className='text-yellow-500 flex'>
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        style={{ backgroundImage: 'linear-gradient(135deg, #eef2ff, #fff 50%, #fafafa)' }}
                        className='px-6 sm:px-8 md:px-16 py-8 rounded-3xl shadow-lg hover:scale-105 transition-transform ease-in-out transform translate-x-0 opacity-100 animate-[slideIn_1s_ease-out]'>
                        <p className='text-gray-600 text-lg animate-[fadeIn_2s_ease-in-out]'>
                            I downloaded several apps and kept only the best ones. And I think Üben is one of them.
                        </p>

                        <div className='mt-6 flex justify-between items-center'>
                            <h4 className="font-semibold text-lg text-gray-800 animate-[fadeIn_2s_ease-in-out]">Abir, Morocco</h4>
                            <div className='text-yellow-500 flex'>
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        style={{ backgroundImage: 'linear-gradient(135deg, #eef2ff, #fff 50%, #fafafa)' }}
                        className='px-6 sm:px-8 md:px-16 py-8 rounded-3xl shadow-lg hover:scale-105 transition-transform ease-in-out transform translate-x-0 opacity-100 animate-[slideIn_1s_ease-out]'>
                        <p className='text-gray-600 text-lg animate-[fadeIn_2s_ease-in-out]'>
                            I downloaded several apps and kept only the best ones. And I think Üben is one of them.
                        </p>

                        <div className='mt-6 flex justify-between items-center'>
                            <h4 className="font-semibold text-lg text-gray-800 animate-[fadeIn_2s_ease-in-out]">Abir, Morocco</h4>
                            <div className='text-yellow-500 flex'>
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Practice Section */}
            <div className="hero-section container mx-auto px-8 py-12 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
                {/* Left Content */}
                <div className="max-w-5xl text-center md:text-left transform translate-x-0 opacity-100 animate-[moveRight_2s_ease-in-out]">
                    <img
                        className="h-[400px] md:h-[700px] w-auto mx-auto md:mx-0"
                        src="/mobile1.png"
                        alt="Conversation preview"
                    />

                    {/* App Store Image Below */}
                    <div className="mt-6 mr-36 animate-[moveLeft_2s_ease-in-out]">
                        <img className="h-14 mx-auto" src="/appStore.png" alt="App Store" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="text-center md:text-left mt-8 md:mt-0 transform translate-x-0 opacity-100 animate-[moveUp_2s_ease-in-out]">
                    <h3 className="font-bold text-4xl mb-6 animate-[fadeIn_2s_ease-in-out] ">The best way to learn a language is through practice</h3>
                    <p className="text-gray-500 mt-2 text-xl ">Practice personalized exercises that get you speaking and writing German</p>
                    <p className="text-gray-500 mt-2 text-xl ">Get feedback on your work and explanations for how to improve</p>
                    <p className="text-gray-500 mt-2 text-xl ">Track your progress and be amazed by what you learn</p>
                    <p className="text-gray-500 mt-2 text-xl ">Ace German grammar including noun genders, adjective declensions, and 140 other topics</p>
                </div>
            </div>

            {/* Table Section */}
            <div className='mt-24 bg-white flex flex-col items-center mb-20 transform translate-x-0 opacity-100 animate-[slideIn_1s_ease-out]'>
                <h3 className='font-bold text-4xl animate-[fadeIn_2s_ease-in-out]'>We stack up well</h3>
                <img className='mt-8 animate-[moveLeft_2s_ease-in-out]' src="/table.png" alt="" />
                <p className='text-gray-500 mt-9 text-xl animate-[fadeIn_2s_ease-in-out] '>We&rsquo;re confident you&rsquo;ll like it. So we&rsquo;re giving you 7-day unlimited access for free.</p>
                <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-200 transition animate-[fadeIn_2s_ease-in-out]">
                    Start learning from today
                </button>
            </div>

            {/* Title Card */}
            <div
                style={{
                    backgroundImage: 'linear-gradient(225deg, #fff0, #fff), linear-gradient(90deg, #facc15, #f59e0b)',
                }}
                className="hero-section container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto px-8 py-12 shadow-lg rounded-[2.5rem] mb-20 border transform translate-x-0 opacity-100 animate-[slideIn_1s_ease-out]"
            >
                {/* Left Content */}
                <div className="flex flex-col mb-6 md:mb-0 animate-[fadeIn_2s_ease-in-out]">
                    <h3 className="font-bold text-2xl mb-4 md:mb-6 animate-[moveRight_2s_ease-in-out]">Ready to get started?</h3>
                    <p className="text-gray-500 mt-2 text-lg animate-[moveRight_2s_ease-in-out]">Learn useful grammar and common vocabulary</p>
                    <p className="text-gray-500 mt-2 text-lg animate-[moveRight_2s_ease-in-out]">Practice with Artificial Intelligence</p>
                    <p className="text-gray-500 mt-2 text-lg animate-[moveRight_2s_ease-in-out]">Prepare for CEFR tests</p>
                </div>

                {/* Right Content */}
                <div className="flex text-center flex-col md:text-left mt-8 md:mt-0 animate-[fadeIn_2s_ease-in-out]">
                    <h3 className="font-bold text-2xl mb-6 animate-[moveRight_2s_ease-in-out]">Download the app now and start learning.</h3>
                    <div className="mt-6 mx-auto md:mx-0 animate-[moveLeft_2s_ease-in-out]">
                        <img className="h-14" src="/appStore.png" alt="App Store" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
