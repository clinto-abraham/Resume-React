import { registerModalToggle } from "../../../../redux/subscribeSlice";
import { useDispatch, useSelector } from "react-redux";

function EmailSubscription() {
  const { showModal } = useSelector((state) => state.subscribe);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(registerModalToggle(!showModal));
  };

  // const [showModal, setShowModal] = React.useState(null);
  // React.useEffect(() => {
  //   setShowModal(true);
  //   return () => setShowModal(false);
  // }, []);
  return (
    <div
      style={{
        display: showModal ? "block" : "none",
        // zIndex: 10,
      }}
      className="modal flex items-center justify-center h-screen"
    >
      {/* <!-- Card --> */}
      <div className="bg-zinc-600 p-2 mx-6 rounded-2xl">
        {/* <!-- Flex Container --> */}
        <div className="flex flex-col lg:flex-row md:flex-col rounded-l-xl">
          {/* <!-- Image --> */}
          <img
            src="https://public-personal-data.s3.ap-south-1.amazonaws.com/progamming+files/removedBackground.png"
            alt="salt sprinkle"
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
          {/* <!-- Content --> */}
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>

            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>

            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />

              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                Subcribe
              </button>
              <button
                className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                onClick={() => handleClose()}
              >
                Close X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;
