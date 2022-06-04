import { Button } from '@mui/material'

import { ListPetsSltyled, Item, Photo, Informations, Name, Description } from "./ListPets.style";

import {Pet} from '../../../data/@types/Pet'
import {TextService} from '../../../data/services/TextService';

interface ListProps{
    pets: Pet[];
}

export default function ListPets(props: ListProps){

    const MaxTextSize = 150;

    return (
        <ListPetsSltyled>
            {props.pets.map(pet => (
                <Item key={pet.id}>
                <Photo src={pet.photo} alt={pet.name}></Photo>
                <Informations>
                    <Name>{pet.name}</Name>
                    <Description>
                        {TextService.limitText(pet.history, MaxTextSize)}
                    </Description>
                    <Button variant='contained' fullWidth>Vou Adotar o {pet.name}</Button>
                </Informations>
                </Item>
            ))}
        </ListPetsSltyled>
    )
}