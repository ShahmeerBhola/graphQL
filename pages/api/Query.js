import { gql } from "@apollo/client";
import client from "../../apolloclient";

const { data } = await client.query({
    query:  gpl
})
export const ALL_USERS=gql`
{
    query Students{
        students{
            _id
            name
            email
            age
            phone
            rollNumber
        }
    }
}`;