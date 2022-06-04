import type { NextPage } from 'next'
import ListPets from '../ui/components/ListPets/ListPets'
import Title from '../ui/components/Title/Title'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <Title 
      title='' 
      subtitle={
        <span>
          Com uma pequena ajuda mensal, você <br /> 
          pode <strong>adotar um pet por aqui, facilmente</strong>
        </span>
      } />
      <ListPets pets={[
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
      ]}/>

      <Dialog open={false} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <TextField 
            label={'Email'}
            type={'email'}
            fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            label={'Ajuda por mês'}
            type={'number'}
            fullWidth
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt: 5}}>
          <Button color={'secondary'}>Cancelar</Button>
          <Button variant={'contained'} sx={{color: '#fff'}}>Confirmar Adoção</Button>
        </DialogActions>
        </Dialog>
        <Snackbar open={false} message={'Hoje eu acordei mais cedo'} />
    </div>
  )
}

export default Home
