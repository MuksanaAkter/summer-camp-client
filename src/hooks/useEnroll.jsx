import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useEnroll = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const { refetch, data: enrolls = [] } = useQuery({
        queryKey: ['carts', user?.email],
           queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolls?email=${user?.email}`, { headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
        
    })

    return [enrolls, refetch]

}
export default useEnroll;