import type { NextPage } from 'next'
import ListPets from '../ui/components/ListPets/ListPets'
import Title from '../ui/components/Title/Title'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    petListArray, 
    petSelected, 
    setPetSelected, 
    email, 
    setEmail, 
    value, 
    setValue, 
    message, 
    setMessage, adtop} = useIndex()

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

      <Dialog 
        open={petSelected !== null} 
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt: 5}} >
          <Button
            color={'secondary'}
            onClick={() => setPetSelected(null)}
          >
            Cancelar
          </Button>
          <Button
            style={{'color': '#fff'}}
            variant={'contained'}
            onClick={() => adtop()}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={message.length > 0} message={message} autoHideDuration={2500} onClose={() => setMessage('')}></Snackbar>
    </div>
  )
}

export default Home
