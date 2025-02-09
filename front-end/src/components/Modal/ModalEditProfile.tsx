"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import DOCModal from "./DOCModal";

const genderOptions = ["Male", "Female", "Other"];
const maritalStatusOptions = ["Single", "Married", "Divorced", "Widowed"];
const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const religionOptions = [
  "Islam",
  "Hinduism",
  "Christianity",
  "Buddhism",
  "Others",
];

interface IProps {
  id: string;
  buttonClass: string;
}

const ModelEditProfile = ({ id, buttonClass }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Md. Jewel",
      lastName: "Rana",
      gender: "Male",
      dob: "1999-09-26",
      mobile: "+8801xxxxxxxxx",
      email: "jewel@gmail.com",
      nationality: "Bangladeshi",
      maritalStatus: "Single",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated Profile Data:", data);
  };

  return (
    <DOCModal
      title="Update Profile Information"
      buttonText="Edit Profile"
      buttonClassName={buttonClass}
      modalSize="3xl"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 bg-white rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className="w-full border bg-white  bg-white rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                {errors.firstName.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">
                {errors.lastName.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
              placeholder="Enter email"
            />
          </div>{" "}
          <div>
            <label className="block font-medium">Mobile</label>
            <input
              type="tel"
              {...register("mobile", { required: "Mobile number is required" })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
              placeholder="Enter mobile number"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
            >
              {genderOptions.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">
                {errors.dob.message as string}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Nationality</label>
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
              placeholder="Enter nationality"
            />
          </div>
          <div>
            <label className="block font-medium">Marital Status</label>
            <select
              {...register("maritalStatus", {
                required: "Marital status is required",
              })}
              className="w-full border bg-white  rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1AB79C]"
            >
              {maritalStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            type="submit"
            className="bg-[#1AB79C] text-white px-6 py-2 rounded-lg hover:bg-[#1ab79dde] transition"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </DOCModal>
  );
};

export default ModelEditProfile;
