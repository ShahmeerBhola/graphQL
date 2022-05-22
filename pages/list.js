import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQuery,useMutation, gql } from "@apollo/client";
// import { ALL_USERS } from "./api/Query";

const ALL_USERS = gql`
  
   query { students{
      _id
      name
      rollNumber
      email
      phone
      age
    }
    }
`;

const REMOVE_USERS = gql`
  mutation removeStudent(
    $_id: String!
  ) {
    removeStudent(
    _id:$_id
    ) {
      _id
    }
  }
`;
function list() {
  const { data, error, loading } = useQuery(ALL_USERS);
  const [removeStudent] = useMutation(REMOVE_USERS);

  const [listStudents,setListStudents]=React.useState('')
  React.useEffect(()=>{
    if(data && data!=="undefined"){
      setListStudents(data.students);
    }
  },[data])
  // const []
  // const {students}=data;x
  console.log("data",listStudents);

  const deleteHandler = (_id) => {
    removeStudent({variables:_id})
  console.log("remove",_id);

    // removeStudent({variable:id})

  };
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
            {
              listStudents.length>0 &&
              listStudents.map((items)=>( <tr key={items._id}>
                <td>{items.name}</td>
                <td>{items.rollNumber}</td>
                <td>{items.email}</td>
                <td>{items.age}</td>
                <td>{items.phone}</td>
                <td>
                  <AiOutlineDelete
                    className="hover:text-red-600 cursor-pointer"
                    onClick={()=>deleteHandler(items._id)}
                  />
                </td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default list;
