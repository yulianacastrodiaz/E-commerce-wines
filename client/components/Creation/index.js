import React from "react";


const Creation = () => {
    return (
        <div className="flex flex-col">

            <form>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <textarea type="textarea" placeholder="description" className="input input-bordered"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input type="number" placeholder="price" className="input input-bordered"/>
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