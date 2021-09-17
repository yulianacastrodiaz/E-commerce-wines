import React from "react";


const Creation = () => {
    return (
        <div className="flex flex-col">

            <form>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name:</span>
                    </label>
                    <input type="text" placeholder="name" class="input input-bordered"/>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description:</span>
                    </label>
                    <textarea type="textarea" placeholder="description" class="input input-bordered"/>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Price:</span>
                    </label>
                    <input type="number" placeholder="price" class="input input-bordered"/>
                </div>

                <label>
                    Image:
                    <input type="file" name="image" multiple/>
                </label>

                <button className='btn btn-primary ml-24' type='submit'>Add Product</button>

            </form>


        </div>
    )
}

export default Creation;