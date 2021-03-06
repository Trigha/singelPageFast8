import { FaSearch, FaPlus, FaHome, FaRegCalendarAlt } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './pagination';
import ReactLoading from 'react-loading';

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=28')
      .then((Response) => {
        if (Response.data) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setData(Response.data.results);
        } else {
          alert('not found');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center h-screen">
        <br />

        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }
  return (
    <div>
      {/* Start Main */}
      <div class="flex flex-warp">
        {/* sidebar */}
        <div class="md:flex w-lg md:w-56 lg:w-80 h-screen bg-white border-r hidden">
          <div class="px-10 lg:px-16">
            <ul>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <FaHome size={25} />
                <span class="font-semibold">Beranda</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <IoIosPeople size={25} />
                <span class="font-semibold">Personnel List</span>
              </li>
              <li class="flex space-x-2 mt-10 cursor-pointer hover:text-primary duration-150">
                <FaRegCalendarAlt size={25} />
                <span class="font-semibold">Daily Attendance</span>
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
                  <div class="flex flex-col md:flex-row md:absolute md:bottom-2 md:left-[58%] md:space-x-5">
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
                      <button class="w-full py-2  px-4 bg-primary text-white uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400 duration-300">
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
            {currentPost ? (
              currentPost.map((el, i) => (
                <div class="w-64 max-w-lg drop-shadow-lg" key={i}>
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
                            {el.name.first} {el.name.last}
                          </p>
                          <h1 class="text-[14px] text-secondary font-bold self-start leading-3">
                            Telephone
                          </h1>
                          <p class="text-secondary self-start text-[16px] font-medium md:mb-2">
                            {el.phone}
                          </p>
                          <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden md:block">
                            Birthday
                          </h1>
                          <p class="text-secondary self-start text-[16px] font-medium hidden md:block md:mb-2">
                            {el.dob.date.substring(0, 10)}
                          </p>
                          <h1 class="text-[14px] text-secondary font-bold self-start leading-3 hidden md:block">
                            Email
                          </h1>
                          <p class="text-secondary self-start text-[16px] font-medium hidden md:block md:mb-2">
                            {el.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h1 className="text-lg font-medium text-gray-400 italic ">
                  Result Empty
                </h1>
              </>
            )}
          </div>
          <div className="mx-auto">
            <Pagination
              postPerPage={postPerPage}
              totalPosts={data.length}
              paginate={paginate}
            />
          </div>
          {/* End main content */}
        </div>
      </div>

      {/* End main*/}
    </div>
  );
}

export default Main;
