import { FaSearch, FaPlus } from 'react-icons/fa';

function Main() {
  return (
    <div>
      {/* Start Main content */}
      <div class="flex flex-wrap">
        <div class="w-64 md:w-full max-w-lg mx-auto drop-shadow-lg rounded-xl">
          <div class="bg-white border-transparent border-4  shadow-sm h-full">
            <div class="p-2">
              <div class="flex flex-col">
                <h1 class="flex items-start uppercase  text-primary font-bold text-2xl">
                  personel list
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
      </div>
      {/* End main content */}
    </div>
  );
}

export default Main;
