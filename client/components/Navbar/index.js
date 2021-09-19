const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-md ">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          <i className="fas fa-user-md pr-3"></i>Wines
        </span>
      </div>
      <div className="flex-none px-2 lg:flex md:flex sm:flex">
        <button className="btn btn-square px-8 btn-ghost mr-4">Home</button>
        <label htmlFor="my-modal-2" className="btn btn-primary modal-button">
          open modal
        </label>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action flex-col">
              <label htmlFor="my-modal-2" className="btn my-2">
                Registrate con google
              </label>
              <label htmlFor="my-modal-2" className="btn btn-secondary my-2">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
