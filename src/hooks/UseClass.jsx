import { useQuery } from "@tanstack/react-query";

const UseClass = () => {

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:4000/classes');
            return res.json();
        }
    })

    return [ classes , loading, refetch]
}

export default UseClass;