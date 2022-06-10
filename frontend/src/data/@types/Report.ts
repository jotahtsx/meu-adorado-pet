import {Pet} from './Pet';

export interface Report{
    id: number;
    email: string;
    allowance_amount: string;
    pet: Pet;
}