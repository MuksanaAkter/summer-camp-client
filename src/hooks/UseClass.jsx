import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:4000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:4000/classes');
            return res.json();
        }
    })

    return [ classes , loading, refetch]
}

export default useClass;