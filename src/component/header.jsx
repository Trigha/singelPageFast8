function Heading() {
  return (
    <div>
      <header class="bg-white shadow-sm w-full fixed z-10  top-0 ">
        <div class="max-auto  px-8 py-2 bg-white">
          <div class="flex justify-between">
            <div class="logo flex items-center space-x-4 mr-10 h-20">
              <img
                class="h-[60px]"
                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png"
                alt=""
              />
            </div>

            <div class=" menu flex justify-end  items-center  flex-1 space-x-4">
              <h1>
                Hallo,{' '}
                <span className="text-emerald-500 font-bold">Gadjian User</span>
              </h1>

              <img
                class="h-9 rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="user image"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Heading;
