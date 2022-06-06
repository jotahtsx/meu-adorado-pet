import { useState , useEffect} from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex(){
    const [petListArray, setPetListArray] = useState<Pet[]>([]),
    [petSelected, setPetSelected] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [allowance_amount, setAllowanceAmount] = useState(''),
    [message, setMessage] = useState('')

    useEffect(() => {
      ApiService.get('/pets')
        .then((reponse) => {
          setPetListArray(reponse.data);
        })
    }, [])

    useEffect(() => {
      if(petSelected === null){
        clearTheForm()
      }
    }, [petSelected])

    function adtop(){
      if(petSelected !== null){
        if(validateAdoptData()){
          ApiService.post('/adocoes', {
            pet_id: petSelected.id,
            email,
            allowance_amount
          })
          .then(() => {
            setPetSelected(null);
            setMessage('Pet adotado com sucesso')
            // clearTheForm()
          })
          .catch((error: AxiosError) => {
            setMessage(error.response?.data.message)
          })
        }else{
          setMessage('Preencha os dados corretamente')
        }
      }
    }

    function validateAdoptData(){
      return email.length > 8 && allowance_amount.length> 0
    }

    function clearTheForm(){
      setEmail('');
      setAllowanceAmount('');
    }

    return {
        petListArray,
        petSelected,
        setPetSelected,
        email,
        setEmail,
        allowance_amount,
        setAllowanceAmount,
        message,
        setMessage,
        adtop
    };
}