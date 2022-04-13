import { FaSearch, FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';

function Main() {
  return (
    <div>
      {/* Start Main */}
      <div class="flex flex-warp">
        {/* sidebar */}
        <div class="md:flex w-lg md:w-56 lg:w-80 h-screen bg-white border-r hidden">
          <div class="px-10 lg:px-16">
            <ul>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="font-semibold">Home</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="font-semibold">All Courses</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span class="font-semibold">My Course</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="font-semibold">Profile</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span class="font-semibold">Setthing</span>
              </li>
            </ul>
          </div>
        </div>
        {/* end side bar */}

        <div class="flex flex-col mx-auto">
          {/* Heading main content */}
          <div class="w-64 md:w-full  drop-shadow-lg rounded-xl mb-6 pt-10">
            <div class="bg-white border-transparent border-4 md:w-full shadow-sm">
              <div class="p-2 md:px-5">
                <div class="flex flex-col">
                  <h1 class="flex items-start uppercase  text-primary font-bold text-2xl">
                    personnel list
                  </h1>
                  <h2 class="flex items-start normal-case text-secondary text-lg mb-2">
                    List of all personnels
                  </h2>
                  <div class="flex flex-col md:flex-row md:absolute md:bottom-2 md:left-[58%] space-x-5">
                    <div class="relative mb-3">
                      <button class="absolute top-0 bottom-0 left-3 text-primary font-bold">
                        <FaSearch size={27} />
                      </button>
                      <input
                        class="w-full bg-white text-secondary border border-gray-200  pl-10 py-2 md:py-[13px] px-4 leading-tight text-sm focus:outline-none focus:bg-white focus:border-gray-500"
                        id="search"
                        type="text"
                        placeholder="Find Personnels"
                      />
                    </div>
                    <div class="relative mb-3 ">
                      <button class="w-full py-2  px-4 bg-primary text-white uppercase">
                        <span class="text-[16px] pr-20 font-bold">
                          add personnels
                        </span>
                        <div class="absolute top-2.5 bottom-0 left-[12.5rem]">
                          <FaPlus size={27} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End heading main content */}

          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            {/* Start main content */}
            <div class="w-64 max-w-lg drop-shadow-lg">
              <div class="bg-white border-transparent border-4 rounded-xl shadow-sm">
                <div class="p-2">
                  <div class="flex justify-between">
                    <h1 class="flex items-start   text-secondary  text-[18px] px-2">
                      Personnel ID :
                    </h1>
                    <button class="px-2">
                      <HiDotsHorizontal size={27} />
                    </button>
                  </div>
                </div>
                <div class="border-b-2 w-full" />
                <div class="p-2">
                  <div class="flex flex-row md:flex-col space-x-5 px-2 py-3 md:py-0 md:pt-3">
                    <img
                      class="w-20 md:w-40 rounded-full border border-gray-100 shadow-sm md:mx-auto "
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="user image"
                    />
                    <div class="flex justify-start flex-col py-0 md:pt-5">
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Name
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium pt-0 md:mb-2">
                        First name
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Telephone
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium md:mb-2">
                        08977
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden md:block">
                        Birthday
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium hidden md:block md:mb-2">
                        18-02
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden md:block">
                        Email
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium hidden md:block md:mb-2">
                        test@mail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-64 max-w-lg drop-shadow-lg">
              <div class="bg-white border-transparent border-4 rounded-xl shadow-sm">
                <div class="p-2">
                  <div class="flex justify-between">
                    <h1 class="flex items-start   text-secondary  text-[18px] px-2">
                      Personnel ID :
                    </h1>
                    <button class="px-2">
                      <HiDotsHorizontal size={27} />
                    </button>
                  </div>
                </div>
                <div class="border-b-2 w-full" />
                <div class="p-2">
                  <div class="flex flex-row md:flex-col space-x-5 px-2 py-3">
                    <img
                      class="w-20 md:w-40 rounded-full border border-gray-100 shadow-sm md:mx-auto "
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="user image"
                    />
                    <div class="flex justify-start flex-col py-0 md:py-7">
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Name
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium pt-0 mb-2">
                        First name
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Telephone
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium">
                        08977
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden">
                        Birthday
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium hidden">
                        18-02
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-64 max-w-lg drop-shadow-lg">
              <div class="bg-white border-transparent border-4 rounded-xl shadow-sm">
                <div class="p-2">
                  <div class="flex justify-between">
                    <h1 class="flex items-start   text-secondary  text-[18px] px-2">
                      Personnel ID :
                    </h1>
                    <button class="px-2">
                      <HiDotsHorizontal size={27} />
                    </button>
                  </div>
                </div>
                <div class="border-b-2 w-full" />
                <div class="p-2">
                  <div class="flex flex-row md:flex-col space-x-5 px-2 py-3">
                    <img
                      class="w-20 md:w-40 rounded-full border border-gray-100 shadow-sm md:mx-auto "
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="user image"
                    />
                    <div class="flex justify-start flex-col py-0 md:py-7">
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Name
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium pt-0 mb-2">
                        First name
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Telephone
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium">
                        08977
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden">
                        Birthday
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium hidden">
                        18-02
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-64 max-w-lg drop-shadow-lg">
              <div class="bg-white border-transparent border-4 rounded-xl shadow-sm">
                <div class="p-2">
                  <div class="flex justify-between">
                    <h1 class="flex items-start   text-secondary  text-[18px] px-2">
                      Personnel ID :
                    </h1>
                    <button class="px-2">
                      <HiDotsHorizontal size={27} />
                    </button>
                  </div>
                </div>
                <div class="border-b-2 w-full" />
                <div class="p-2">
                  <div class="flex space-x-5 px-2 py-3">
                    <img
                      class="w-20 rounded-full border border-gray-100 shadow-sm"
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="user image"
                    />
                    <div class="flex justify-start flex-col">
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Name
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium pt-0 mb-2">
                        First name
                      </p>
                      <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                        Telephone
                      </h1>
                      <p class="text-secondary self-start text-[16px] font-medium">
                        08977
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End main content */}
        </div>
      </div>

      {/* End main*/}
    </div>
  );
}

export default Main;
