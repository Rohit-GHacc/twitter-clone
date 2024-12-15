import axios from 'axios'
import { TWEET_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllTweets} from '../redux/tweetSlice'
const useGetTweets =  (id)=>{
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllTweets = async ()=>{
            try {
                const res = await axios.get(`${ TWEET_API_END_POINT}/alltweets/${id}`,{
                    withCredentials: true
                })
                dispatch(getAllTweets(res?.data?.tweets))
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllTweets()
        // eslint-disable-next-line
    }, [id])
    
}
export default useGetTweets