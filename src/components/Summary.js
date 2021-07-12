import "./Summary.css";
const Summary = (props) => {
  return (
    <>
      <div className="flex px-4 py-4 flex-col justify-center md:flex-row md:justify-around sm:space-y-8 md:space-y-0">
        <div className="px-2 py-6 flex justify-items-start self-center bg-admin-light width">
          <div>
            <svg
              className="h-20 w-20 text-admin-dark"
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="pl-4 flex flex-col justify-center">
            <div className="text-admin-lightblue">TOTAL SALES</div>
            <div className="text-admin-orange">VALUES</div>
          </div>
        </div>
        <div className="px-2 py-6 flex justify-items-start self-center bg-admin-light width">
          <div>
            <svg
              className="h-20 w-20 text-admin-dark"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="pl-4 flex flex-col justify-center">
            <div className="text-admin-lightblue">TOTAL ORDERS</div>
            <div className="text-admin-orange">VALUES</div>
          </div>
        </div>
        <div className="px-2 py-6 flex justify-items-start self-center bg-admin-light width">
          <div>
            <svg
              className="h-20 w-20 text-admin-dark"
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div className="pl-4 flex flex-col justify-center">
            <div className="text-admin-lightblue">TOTAL PRODUCTS</div>
            <div className="text-admin-orange">VALUES</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
