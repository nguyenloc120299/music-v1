import axios from 'axios'
import { useEffect, useState } from 'react'

function Api() {
    const [nhacVN,setnhacVn]=useState([])
    const[nhacAuMy,setNhacAuMy]=useState([])
    const[nhacChauA,setNhacChauA]=useState([])
    const[nhacKL,setNhacKL]=useState([])
    const[loading,setLoading]=useState(false)
    const getNhac= async()=>{
        setLoading(true)
        const res = await axios.get('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST')
        if(res.data) {
            setnhacVn(res.data.songs.top100_VN)
            setNhacAuMy(res.data.songs.top100_AM)
            setNhacChauA(res.data.songs.top100_CA)
            setNhacKL(res.data.songs.top100_KL)
                
        }
        setLoading(false)
    }

    useEffect(()=>{
        getNhac()
    },[])
    return {
        nhacVN: [nhacVN,setnhacVn],
        nhacChauA: [nhacChauA,setNhacChauA],
        loading: [loading,setLoading],
        nhacAuMy: [nhacAuMy,setNhacAuMy],
        nhacKL: [nhacKL,setNhacKL]
    }
}

export default Api

