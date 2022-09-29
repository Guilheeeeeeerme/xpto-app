import CheckIcon from '@mui/icons-material/Check';
import { Chip, Grid, Typography } from "@mui/material";
import { Component } from "react";
import './home.styles.css';

import { SocialComponent } from "../../components/social/social.component";
import empresas_ribbon from './../../img/empresas_ribbon.png';

export class HomeRoute extends Component {

    render = () => {
        return (

            <Grid container spacing={2} className="homeContainer full-height">

                <Grid item xs={12} md={8} className="homeVideoContainer full-height">

                    <Typography variant="h3">
                        Apresentação da empresa
                    </Typography>

                    <Typography variant="h6">
                        Fique por dentro de tudo em nossas redes sociais
                    </Typography>

                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/Iqoz9t14dRo" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <Typography variant="body2" color="text.secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>

                </Grid>

                <Grid item xs={12} md={4} className="homeDescriptionContainer full-height">

                    <Typography variant="h3">
                        A Consultoria que Você Mais Precisa.
                    </Typography>

                    <Typography variant="body2">

                        <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>

                            <Grid item xs={12} md={4}>
                                <Chip icon={<CheckIcon />} label="Análise de processos" />
                            </Grid>

                            <Grid item xs={12} md={4} >
                                <Chip icon={<CheckIcon />} label="Dedução e solução ágil" />
                            </Grid>

                            <Grid item xs={12} md={4} >
                                <Chip icon={<CheckIcon />} label="Aplicabilidade geral" />
                            </Grid>

                        </Grid>

                    </Typography >

                    <Typography variant="body2">
                        Atuação em Todo o Vale do Paraíba.
                        20 Anos de atendimento Full Time
                    </Typography>

                    <Typography variant="body2">
                        Mais de 10 empresas na região estão com nossa acessoria ativa
                    </Typography>

                    <Typography variant="body2">
                        <img src={empresas_ribbon} alt="clientes" style={{ height: '2em' }} />
                    </Typography>

                    <Typography variant="body2">
                        Para quaiquer dúvidas a repeito do contranto, acesse nossa
                        página de orçamentos para sanar todas eventuais questões.
                    </Typography>

                </Grid >

            </Grid >

        )
    }

}