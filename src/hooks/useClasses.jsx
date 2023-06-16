import { useEffect, useState } from "react";

const useClasses = () => {
    const [classess, setClassess] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClassess(data);
            setLoading(false)
        });
    }, [])
    return [classess, loading]
}

export default useClasses;