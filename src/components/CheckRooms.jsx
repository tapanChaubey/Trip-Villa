import React from "react";
export default function CheckRooms(){
    return (

        <>
       <form className="bg-white/90 backdrop-blur-md text-gray-700 rounded-xl px-4 sm:px-6 py-5 flex flex-row flex-wrap justify-center items-end gap-4 sm:gap-6 mb-6 sm:mb-8 shadow-xl w-full max-w-4xl mx-auto">
          {/* Destination */}
          <div className="flex flex-col w-[48%] sm:w-auto min-w-[140px]">
            <label htmlFor="destinationInput" className="text-xs sm:text-sm font-semibold mb-1">
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded-md border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm outline-none w-full"
              placeholder="Where to?"
              required
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col w-[48%] sm:w-auto min-w-[140px]">
            <label htmlFor="checkIn" className="text-xs sm:text-sm font-semibold mb-1">
              Check In
            </label>
            <input
              id="checkIn"
              type="date"
              className="rounded-md border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm outline-none w-full"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col w-[48%] sm:w-auto min-w-[140px]">
            <label htmlFor="checkOut" className="text-xs sm:text-sm font-semibold mb-1">
              Check Out
            </label>
            <input
              id="checkOut"
              type="date"
              className="rounded-md border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm outline-none w-full"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col w-[48%] sm:w-20 min-w-[100px]">
            <label htmlFor="guests" className="text-xs sm:text-sm font-semibold mb-1">
              Guests
            </label>
            <input
              min={1}
              max={10}
              id="guests"
              type="number"
              placeholder="0"
              className="rounded-md border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm outline-none w-full"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md shadow-md w-full sm:w-auto transition duration-300 transform hover:scale-105"
          >
            Search
          </button>
        </form>

        
        </>
    );
}