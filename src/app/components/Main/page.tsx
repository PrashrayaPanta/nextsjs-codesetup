import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="overflow-x-auto bg-pink-600 md:overflow-x-visible">
      <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-4 md:gap-6">
        <div className="flex w-[90%] flex-none snap-start rounded-lg bg-blue-700 sm:w-[350px] md:w-full">
          <div className="flex w-full flex-col gap-2 p-3">
            {/* <!-- Image --> */}
            <div>
              <Image
                src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756400133/UpComingEvents/image_wtrhya.png"
                alt="Event Image"
                width={350}
                height={200}
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756411179/UpComingEvents/fi_3179068_dfr4yq.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="text-sm sm:text-base">Location</span>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-red-600 p-2 rounded">
                <h1 className="text-sm sm:text-base font-semibold">
                  USA Education Fair - May & August Intake
                </h1>
                <button className="rounded bg-blue-300 px-2 py-2 text-xs sm:text-sm">
                  25th March 2025
                </button>
              </div>
            </div>

            <button className="rounded bg-blue-500 px-4 py-2 text-white mt-2">
              Register
            </button>
          </div>
        </div>

        <div className="flex w-[90%] flex-none snap-start rounded-lg bg-blue-400 sm:w-[350px] md:w-full">
          <div className="flex w-full flex-col gap-2 p-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756400133/UpComingEvents/image_wtrhya.png"
                alt="Event Image"
                width={350}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756411179/UpComingEvents/fi_3179068_dfr4yq.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="text-sm sm:text-base">Location</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-red-600 p-2 rounded">
                <h1 className="text-sm sm:text-base font-semibold">
                  USA Education Fair - May & August Intake
                </h1>
                <button className="rounded bg-blue-300 px-2 py-2 text-xs sm:text-sm">
                  25th March 2025
                </button>
              </div>
            </div>
            <button className="rounded bg-blue-500 px-4 py-2 text-white mt-2">
              Register
            </button>
          </div>
        </div>

        <div className="flex w-[90%] flex-none snap-start rounded-lg bg-blue-400 sm:w-[350px] md:w-full">
          <div className="flex w-full flex-col gap-2 p-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756400133/UpComingEvents/image_wtrhya.png"
                alt="Event Image"
                width={350}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756411179/UpComingEvents/fi_3179068_dfr4yq.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-lg"
                />
                <span className="text-sm sm:text-base">Location</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-red-600 p-2 rounded">
                <h1 className="text-sm sm:text-base font-semibold">
                  USA Education Fair - May & August Intake
                </h1>
                <button className="rounded bg-blue-300 px-2 py-2 text-xs sm:text-sm">
                  25th March 2025
                </button>
              </div>
            </div>
            <button className="rounded bg-blue-500 px-4 py-2 text-white mt-2">
              Register
            </button>
          </div>
        </div>

        <div className="flex w-[90%] flex-none snap-start rounded-lg bg-blue-400 sm:w-[350px] md:w-full">
          <div className="flex w-full flex-col gap-2 p-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756400133/UpComingEvents/image_wtrhya.png"
                alt="Event Image"
                width={350}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dq2gdnl7o/image/upload/v1756411179/UpComingEvents/fi_3179068_dfr4yq.png"
                  alt="Location Icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="text-sm sm:text-base">Location</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-red-600 p-2 rounded">
                <h1 className="text-sm sm:text-base font-semibold">
                  USA Education Fair - May & August Intake
                </h1>
                <button className="rounded bg-blue-300 px-2 py-2 text-xs sm:text-sm">
                  25th March 2025
                </button>
              </div>
            </div>
            <button className="rounded bg-blue-500 px-4 py-2 text-white mt-2">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
