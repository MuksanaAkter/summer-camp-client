import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure ";
//import useAuth from "./useAuth";

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isinstructor, isLoading: isinstructorLoading} = useQuery({
        queryKey: ['isinstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            //console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [isinstructor, isinstructorLoading]
}
export default useInstructor;