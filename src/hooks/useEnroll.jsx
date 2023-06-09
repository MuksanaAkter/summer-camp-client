import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useEnroll = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: enrolls = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolls?email=${user?.email}`)
           // console.log(res);
            return res.json();
        },
    })

    return [enrolls, refetch]

}
export default useEnroll;