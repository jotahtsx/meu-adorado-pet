import { NextPage } from "next";
import Title from "../../ui/components/Title/Title";

import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material'

import {useReport} from "../../data/hooks/pages/pets/useReport";

const Report: NextPage = () => {
    const {listReport} = useReport()
    return(
        <>
        <Title 
        title={"Relatório de adoção"} 
        subtitle={"Acesse a lista de pets adotados"}
        />
        <TableContainer
        component={Paper}
        sx={{maxWidth: 1140, mx: 'auto', p: {xs: 3, md: 5}}}
        >
            <Table style={{'marginBottom': '70px'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Pet</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell align={'right'}>Valor Mensal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listReport.map((report) => (
                    <TableRow key={report.id}>
                        <TableCell>{report.pet.name}</TableCell>
                        <TableCell>{report.email}</TableCell>
                        <TableCell align="right">{report.allowance_amount}</TableCell>
                    </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>            
        </>
    )
}

export default Report;