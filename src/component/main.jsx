import { FaSearch, FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';

function Main() {
  return (
    <div>
      {/* Start Main */}
      <div class="flex flex-wrap">
        {/* Heading main content */}
        <div class="w-64 md:w-full max-w-lg mx-auto drop-shadow-lg rounded-xl mb-6">
          <div class="bg-white border-transparent border-4  shadow-sm h-full">
            <div class="p-2">
              <div class="flex flex-col">
                <h1 class="flex items-start uppercase  text-primary font-bold text-2xl">
                  personnel list
                </h1>
                <h2 class="flex items-start normal-case text-secondary text-lg mb-2">
                  List of all personnels
                </h2>
                <div class="relative mb-3">
                  <button class="absolute top-0 bottom-0 left-3 text-primary font-bold">
                    <FaSearch size={27} />
                  </button>
                  <input
                    class="w-full bg-white text-secondary border border-gray-200  pl-10 py-2 px-4 leading-tight text-sm focus:outline-none focus:bg-white focus:border-gray-500"
                    id="search"
                    type="text"
                    placeholder="Find Personnels"
                  />
                </div>
                <div class="relative mb-3">
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
        {/* End heading main content */}

        {/* Start main content */}
        <div class="w-64 md:w-full max-w-lg mx-auto drop-shadow-lg">
          <div class="bg-white border-transparent border-4 rounded-xl shadow-sm h-full">
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
        {/* End main content */}
      </div>
      {/* End main*/}
    </div>
  );
}

export default Main;
