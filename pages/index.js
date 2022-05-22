import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USERS = gql`
  mutation createStudent(
    $name: String!
    $rollNumber: String!
    $email: String!
    $age: String!
    $phone: String!
  ) {
    createStudent(
      createStudentInput: {
        name: $name
        rollNumber: $rollNumber
        email: $email
        age: $age
        phone: $phone
      }
    ) {
      name
      rollNumber
      email
      age
      phone
    }
  }
`;

export default function Home() {
  const [user, setUser] = useState({});
  // const { data, loading, error } = useMutation(CREATE_USERS);

  const [createStudent] = useMutation(CREATE_USERS);

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("user", user);
    createStudent({ variables: user });
  };
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full h-fit">
        <h2 className="text-6xl text-sky-600 font-bold text-center pb-4">
          Student Form
        </h2>
        <div>
          <form
            autoComplete="off"
            onSubmit={submitHandler}
            className="flex flex-col  items-center  justify-center gap-4"
          >
            <input
              className="text-lg w-[300px] indent-2 outline rounded-md outline-sky-500"
              required
              name="name"
              onChange={inputHandler}
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="text-lg w-[300px]  indent-2 outline rounded-md outline-sky-500"
              required
              name="rollNumber"
              onChange={inputHandler}
              type="text"
              placeholder="Enter Your Roll NO."
            />
            <input
              className="text-lg w-[300px] indent-2 outline rounded-md outline-sky-500"
              required
              name="email"
              onChange={inputHandler}
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              className="text-lg w-[300px] indent-2 outline rounded-md outline-sky-500"
              required
              name="age"
              onChange={inputHandler}
              type="number"
              placeholder="Enter Your Age"
            />
            <input
              className="text-lg w-[300px] indent-2 outline rounded-md outline-sky-500"
              required
              name="phone"
              onChange={inputHandler}
              type="number"
              placeholder="Enter Your Phone NO."
            />
            <button className="bg-sky-500 py-2 px-8 rounded-lg  text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
