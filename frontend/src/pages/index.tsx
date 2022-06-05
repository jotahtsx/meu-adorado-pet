import type { NextPage } from 'next'
import ListPets from '../ui/components/ListPets/ListPets'
import Title from '../ui/components/Title/Title'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {petListArray, petSelected, setPetSelected} = useIndex()

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
      <ListPets onSelect={(pet) => setPetSelected(pet)} pets={petListArray} />

      <Dialog open={petSelected !== null} onClose={() => setPetSelected(null)} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <TextField 
            label={'Seu Email'}
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
          <Button 
          color={'secondary'}
          onClick={() => setPetSelected(null)}
          >Cancelar</Button>
          <Button variant={'contained'} sx={{color: '#fff'}}>Confirmar Adoção</Button>
        </DialogActions>
        </Dialog>
        <Snackbar open={false} message={'Hoje eu acordei mais cedo'} />
    </div>
  )
}

export default Home
