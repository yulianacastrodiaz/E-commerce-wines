const Navbar = () => {
    return (
      <div class="navbar mb-2 shadow-md ">
        <div class="flex-1 px-2 mx-2">
          <span class="text-lg font-bold"><i class="fas fa-user-md pr-3" ></i>Wines</span>
        </div>
        <div class="flex-none px-2 lg:flex md:flex sm:flex">
            <button class="btn btn-square px-8 btn-ghost mr-4">Home</button>
            <label for="my-modal-2" class="btn btn-primary modal-button">open modal</label>   
            <input type="checkbox" id="my-modal-2" class="modal-toggle"/>
            <div class="modal">
        <div class="modal-box">
            <h1>Login</h1>
            <div class="modal-action">
            <label for="my-modal-2" class="btn btn-primary">Registrate con google</label> 
            <label for="my-modal-2" class="btn">Close</label>
            </div>
        </div>
        </div>
        </div>
      </div>
    );
  };

export default Navbar;