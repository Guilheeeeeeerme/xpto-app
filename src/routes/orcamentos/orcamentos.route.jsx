import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import CheckIcon from '@mui/icons-material/Check';

export class OrcamentosRoute extends Component {

    render = () => {

        const lorem = `Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean scelerisque metus eget sem.
            Suspendisse fermentum. Proin diam augue.`;

        const servicos = [
            { id: 1, contents: [lorem], title: 'Intro Plan' },
            { id: 2, contents: [lorem, lorem, lorem], title: 'Standard Plan' },
            { id: 3, contents: [lorem, lorem, lorem, lorem, lorem], title: 'Master Plan' },
            { id: 4, contents: [lorem, lorem, lorem, lorem, lorem, lorem], title: 'Partner Plan' },
        ]

        return (<div className="servicosContainer">

            <Typography variant="h5" component="div">
                Serviços da XPTO
            </Typography>

            <Typography variant="body1" component="div">
                o que exatamente fazemos?
            </Typography>

            <div className="servicosTilesContainer">{
                servicos.map((servico) => {
                    return (
                        <Card key={servico.id} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {servico.title}
                                </Typography>
                                <List>{servico.contents.map((content, index) => {
                                    return (<ListItem>
                                        <ListItemIcon><CheckIcon /></ListItemIcon>
                                        <ListItemText primary={content} />
                                    </ListItem>)
                                })}</List>
                            </CardContent>
                        </Card>
                    )
                })
            }</div>


        </div>)
    }

}