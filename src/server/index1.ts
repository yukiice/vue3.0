import  {reactive,toRefs} from 'vue'
import axios from 'axios'

interface  DataProps{
    result:null | string,
    error:null |string,
    loading:boolean,
    loaded:boolean
}

export function  urlLoads(url:string){
    const data:DataProps= reactive({
        result:null,
        error:null,
        loading:false,
        loaded:false
    })
    axios.get(url).then(res=>{
        data.loading = false
        data.loaded = true
        data.result = res.data
    }).catch(err=>{
        data.error = err
        data.loading = true
    })

    const dataRef = toRefs(data)
    return{
        ...dataRef
    }
}
