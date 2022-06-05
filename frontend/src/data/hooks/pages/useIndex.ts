import { useState } from "react";
import { Pet } from "../../@types/Pet";

export function useIndex(){
    const [petListArray, setPetListArray] = useState(
        [
            {
              id: 1,
              name: 'Babidi',
              history: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit et deleniti quidem earum facere illum accusantium recusandae ullam quos eos ex fuga nulla est, ducimus quibusdam molestiae ut a?',
              photo: 'images/placeholders/pets/babidi.jpg'
            },
            {
              id: 1,
              name: 'Maria',
              history: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit et deleniti quidem earum facere illum accusantium recusandae ullam quos eos ex fuga nulla est, ducimus quibusdam molestiae ut a?',
              photo: 'images/placeholders/pets/maria.jpg'
            },
            {
              id: 1,
              name: 'Mucinho',
              history: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit et deleniti quidem earum facere illum accusantium recusandae ullam quos eos ex fuga nulla est, ducimus quibusdam molestiae ut a?',
              photo: 'images/placeholders/pets/mucinho.jpg'
            }
          ]
    ),
    [petSelected, setPetSelected] = useState<Pet | null>(null);

    return {
        petListArray,
        petSelected,
        setPetSelected
    };
}