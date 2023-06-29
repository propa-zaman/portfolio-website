import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(() =>{
        document.title  = `${title} | Afra Zaman`;
    },[title])
}

export default useTitle;