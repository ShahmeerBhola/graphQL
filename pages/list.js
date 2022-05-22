import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
// import { ALL_USERS } from "./api/Query";

const ALL_USERS = gql`
  {
    students {
      _id
      name
      email
      age
      phone
      rollNumber
    }
  }
`;
function list() {
  const { data, error, loading } = useQuery(ALL_USERS);

  console.log("data", data);

  const deleteHandler = (id) => {};
  return (
    <div className="w-full pt-[20px] h-full">
      <h3 className="text-6xl text-sky-600 font-bold text-center pb-4 pt-[20px]">
        Student Lists
      </h3>
      <div className=" shadow-lg w-10/12 lg:w-2/3 p-5 mx-auto">
        <table className="table-auto  w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>1961</td>
              <td>1961</td>
              <td>
                <AiOutlineDelete
                  className="hover:text-red-600 cursor-pointer"
                  onClick={deleteHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default list;
