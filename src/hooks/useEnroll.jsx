import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
//import useAxiosSecure from './useAxiosSecure ';

const useEnroll = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolls = [] } = useQuery({
        queryKey: ['carts', user?.email],
           queryFn: async () => {
            const res = await fetch(`https://musical-instrument-server.vercel.app/enrolls?email=${user?.email}`, { headers: {
                authorization: `bearer ${token}`
            }})
            
            return res.json();
        },
        // queryFn: async () => {
        //     const res = await axiosSecure(`/enrolls?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },
        
    })

    return [enrolls, refetch]

}
export default useEnroll;