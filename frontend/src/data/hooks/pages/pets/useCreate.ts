import { AxiosError } from "axios";
import { useState } from "react";

import { ApiService } from "../../../services/ApiService";

export function useCreate(){
    const [name, setName] = useState(''),
    [history, setHistory] = useState(''),
    [photo, setPhoto] = useState(''),
    [message, setMessage] = useState('')

    function create(){
        if(validateForm()){
            ApiService.post('/pets', {
                name,
                history,
                photo
            })
            .then(() => {
                clear();
                setMessage('Pet cadastrado com sucesso.');
            })
            .catch((error: AxiosError) => {
                setMessage(error.response?.data.message);
            })
        }else{
            setMessage('Você precisa preencher todos os campos.')
        }
    }

    function validateForm(){
        return name.length > 2 && history.length > 20 && photo.length > 5;
    }

    function clear(){
        setName('');
        setHistory('');
        setPhoto('');
    }

    return{
        name,
        history,
        photo,
        setName,
        setHistory,
        setPhoto,
        create,
        message,
        setMessage
    }


}