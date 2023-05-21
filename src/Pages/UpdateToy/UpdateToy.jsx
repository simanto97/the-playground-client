import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateToy = () => {
  const selectedToy = useLoaderData();
  //   console.log(selectedToy[0]);
  const {
    _id,
    image,
    rating,
    toy_name,
    seller_name,
    seller_email,
    price,
    available_quantity,
  } = selectedToy[0];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(
      `https://assignment-11-server-simanto97.vercel.app/update-toy/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Car updated Successfully");
        }
      });
  };

  return (
    <div className="card card-compact m-6 md:w-3/4 md:h-[300px] mx-auto border bg-base-100 shadow-xl">
      <form
        className="space-y-2 grid md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label className="input-group">
          <span>Pic URL</span>
          <input
            className="input input-bordered"
            defaultValue={image}
            {...register("image", { required: true })}
          />
        </label>
        {/* include validation with required or other standard HTML validation rules */}
        <label className="input-group">
          <span>Toy Name</span>
          <input
            className="input input-bordered"
            defaultValue={toy_name}
            {...register("toy_name", { required: true })}
          />
        </label>
        <label className="input-group">
          <span>Seller Name</span>
          <input
            className="input input-bordered"
            defaultValue={seller_name}
            {...register("seller_name", { required: true })}
          />
        </label>
        <label className="input-group">
          <span>Seller Email</span>
          <input
            className="input input-bordered"
            defaultValue={seller_email}
            {...register("seller_email", { required: true })}
          />
        </label>
        {/* errors will return when field validation fails  */}
        <label className="input-group">
          <span>Sub Category</span>
          <select
            className="select select-bordered"
            {...register("sub_category", { required: true })}
          >
            <option value="Regular Cars">Regular Cars</option>
            <option value="Sports Car">Sports Car</option>
            <option value="Mini Fire Trucks">Mini Fire Trucks</option>
          </select>
        </label>
        <label className="input-group">
          <span>Price</span>
          <input
            className="input input-bordered"
            {...register("price", { required: true, pattern: /^[0-9]/ })}
          />
        </label>
        <label className="input-group">
          <span>Rating</span>
          <input
            className="input input-bordered"
            placeholder="Rate 0 to 5"
            {...register("rating", {
              required: true,
              min: 0,
              max: 5,
            })}
          />
        </label>
        <label className="input-group">
          <span>Available Quantity</span>
          <input
            className="input input-bordered"
            {...register("available_quantity", { required: true })}
          />
        </label>
        <label className="input-group">
          <span>Description</span>
          <textarea
            className="input input-bordered"
            {...register("description", { maxLength: 30 })}
            placeholder="Description max:30 words"
          />
        </label>
        <input className="btn btn-info" type="submit" value="Update" />
      </form>
      <Toaster />;
    </div>
  );
};

export default UpdateToy;
