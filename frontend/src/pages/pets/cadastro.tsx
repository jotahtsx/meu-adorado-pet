import Head from 'next/head'
import { NextPage } from "next"
import { useCreate } from '../../data/hooks/pages/pets/useCreate'
import Title from '../../ui/components/Title/Title'
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material'

const Create: NextPage = () => {

    const {
        name,
        history,
        photo,
        setName,
        setHistory,
        setPhoto,
        create,
        message,
        setMessage
    } = useCreate();

    return(
        <>
        <Head>
            <title>Cadastrar novo Pet</title>
        </Head>
        <div>
            <Title 
            title={'Cadastro de pets para adoção'}
            subtitle={'Preencha os dados do novo pet'}
            />

            <Paper sx={{maxWidth: 1140, mx: 'auto', p: 5}} style={{'marginBottom': '70px'}} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={history}
                            onChange={(e) => setHistory(e.target.value)}
                            label={'História do pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereço da imagem'}
                            fullWidth
                        />
                        <Button variant={'contained'}
                        color={'secondary'}
                        component={'a'}
                        href={'https://imgur.com/upload'}
                        target={'_blank'}
                        sx={{mt: 4}}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button onClick={create} style={{'color': '#fff', 'fontWeight': '600'}} variant={"contained"} 
                        fullWidth
                        sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar open={message.length > 0} autoHideDuration={2500} onClose={() => setMessage('')} message={message}></Snackbar>
        </div>
        </>
    )
}

export default Create;