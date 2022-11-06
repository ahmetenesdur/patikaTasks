import React from 'react'

function Forecast({ title }) {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium">
                    {title}
                </p>
            </div>

            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white">
                <div
                    // key={index}
                    className="flex flex-col items-center justify-center"
                >
                    <p className="font-light text-sm">
                        12:00
                    </p>
                    <img
                        src='https://openweathermap.org/img/wn/01d@2x.png'
                        className="w-12 my-1"
                        alt=""
                    />
                    <p className="font-medium">20°</p>
                </div>
            </div>

        </div>
    )
}

export default Forecast