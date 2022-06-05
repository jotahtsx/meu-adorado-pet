import { useState , useEffect} from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [petListArray, setPetListArray] = useState<Pet[]>([]),
    [petSelected, setPetSelected] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [value, setValue] = useState(''),
    [message, setMessage] = useState('')

    useEffect(() => {
      ApiService.get('/pets')
        .then((reponse) => {
          setPetListArray(reponse.data);
        })
    }, [])

    function adtop(){

    }

    return {
        petListArray,
        petSelected,
        setPetSelected,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adtop
    };
}