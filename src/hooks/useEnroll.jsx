import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const useEnroll = () => {
    // const { user, loading } = useAuth();
    const {user, loading}= useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enrolls', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolls?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [enroll, refetch]

}
export default useEnroll;