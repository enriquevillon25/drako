import React, { useState } from "react";
import "./HomeScreen.css";
import drako from "../assets/drako1.jpeg";
import drakoDurmiendo from "../assets/drakodurmiendo1.jpeg";
import drakoSkatewGracia from "../assets/drakoSkatewGracia.jpeg";
import drakoConChucki from "../assets/drakoConChucki.jpeg";
import drakoConPolo from "../assets/drakoConPolo.jpeg";
import drakoConchudo from "../assets/drakoConchudo.jpeg";
import drakoEnSuCaja from "../assets/drakoEnSuCaja.jpeg";
import drakoEntortugasSunset from "../assets/drakoEntortugasSunset.jpeg";
import drakoEscabandoTuquillo from "../assets/drakoEscabandoTuquillo.jpeg";
import drakoTuquilloPlaya from "../assets/drakoTuquilloPlaya.jpeg";
import drakoDurmiendo2 from "../assets/drakoDurmiendo2.jpeg";
import drakoMonty from "../assets/DRAKOMONTY.jpeg";
import drakoEnCarropapa from "../assets/drakoCarroPapá.jpeg";
import drakoContabas from "../assets/drakoContabas.jpeg";
import drakoConPrimitaHabana from "../assets/drakoConPrimitaHabana.jpeg";
import drakoEnCarro from "../assets/drakoEnCarro.jpeg";
import drakoInvandiendo from "../assets/drakoInvandiendo.jpeg";
import drakoTuquilloCorriendo from "../assets/drakoTuquilloCorriendo.jpeg";
import drakoTazmania from "../assets/drakoTazmania.jpeg";
import drakoPlato from "../assets/drakoPlato.jpeg";
import drakoFamilia from "../assets/drakoFamilia.jpeg";
import drakoChorriViendoGarfield from "../assets/drakoChorriViendoGarfield.jpeg";
import drakoCastigado from "../assets/drakoCastigado.jpeg";
import drakoCama from "../assets/drakoCama.jpeg";
import drakoPoto from "../assets/drakoPoto.jpeg";
import drakoDurmiendoTrujillo from "../assets/drakoDurmiendoTrujillo.jpeg";
import drakoChorriGracia from "../assets/drakoChorriGracia.jpeg";
import drakoTuquilloSofa from "../assets/drakoTuquilloSofa.jpeg";
import CardHome from "../components/cardHome/CardHome";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const HomeScreen = () => {
  const [inputMemorie, setInputMemorie] = useState("");

  const memories = [
    {
      title: "drako en suset",
      tag: "drako en suset en tortugas con mama o gracia en carro",
      image: drakoEntortugasSunset,
    },
    {
      title: "drako en la cama",
      tag: "drako durmiendo",
      image: drakoDurmiendo,
    },
    {
      title: "drako en skate",
      tag: "raro",
      image: drakoSkatewGracia,
    },
    {
      title: "drako en tobogan",
      tag: "raro",
      image: drakoConChucki,
    },
    {
      title: "drako chorri w mon",
      tag: "drako tirado en la cama con mama gracia",
      image: drakoCama,
    },
    {
      title: "drako poto sucio",
      tag: "drako limpiandole el poto en tortugas",
      image: drakoPoto,
    },
    {
      title: "drako con polo",
      tag: "drako con polo o bibiri en mi baño",
      image: drakoConPolo,
    },
    {
      title: "drako conchudo",
      tag: "drako conchudo tirado en el mueble de carabayllo",
      image: drakoConchudo,
    },
    {
      title: "drako en su caja",
      tag: "drako en su caja en mi carro de viaje",
      image: drakoEnSuCaja,
    },

    {
      title: "drako castigado",
      tag: "drako castigado en su caja con mirada triste",
      image: drakoCastigado,
    },
    {
      title: "drako jato w mon",
      tag: "drako durmiendo con mama gracia en trujillo huanchaco en su cama",
      image: drakoDurmiendoTrujillo,
    },
    {
      title: "drako abrazo",
      tag: "drako durmiendo con mama gracia en trujillo huanchaco en su cama",
      image: drakoChorriGracia,
    },
    {
      title: "drako tuquillo sofa",
      tag: "drako chorri en tuquillo en sofa",
      image: drakoTuquilloSofa,
    },
    {
      title: "drako tuquillo playa",
      tag: "drako en tuquillo con mama gracia en el mar playa",
      image: drakoTuquilloPlaya,
    },
    {
      title: "drako extrañandote",
      tag: "drako",
      image: drako,
    },
    {
      title: "drako escabando",
      tag: "drako escabando en tuquillo playa en el mar",
      image: drakoEscabandoTuquillo,
    },
    {
      title: "drako y garfield",
      tag: "drako viendo garfiel durmiendo chorri",
      image: drakoChorriViendoGarfield,
    },
    {
      title: "drako y tazmania",
      tag: "drako peleando con tazmania",
      image: drakoTazmania,
    },
    {
      title: "drako y su plato",
      tag: "drako protegiendo lo mas sagrado su plato",
      image: drakoPlato,
    },
    {
      title: "drako jugando playa",
      tag: "drako jugando en tuquillo con mamá graciaß",
      image: drakoTuquilloCorriendo,
    },
    {
      title: "drako y papás",
      tag: "drako con familia papa enrique y gracia juntos abrazo de tres 3",
      image: drakoFamilia,
    },
    {
      title: "drako en carro ajeno",
      tag: "drako en carro ajeno",
      image: drakoEnCarro,
    },
    {
      title: "drako y habana",
      tag: "drako con primita habana en huanchaco trujillo",
      image: drakoConPrimitaHabana,
    },
    {
      title: "drako y monty",
      tag: "drako y monty en tortugas",
      image: drakoMonty,
    },
    {
      title: "drako durmiendo w mon",
      tag: "drako durmiendo con mamá",
      image: drakoDurmiendo2,
    },
    {
      title: "drako maleta",
      tag: "drako en maleta invadiendo",
      image: drakoInvandiendo,
    },
    {
      title: "drako con jordans",
      tag: "drako con zapatillas jordans",
      image: drakoContabas,
    },
    {
      title: "drako en carro papá",
      tag: "drako en carro de papa enrique",
      image: drakoEnCarropapa,
    },
  ];
  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Hello Maria Gracia
      </Typography>
      <TextField
        id="outlined-basic"
        label="Write your best memories with drako"
        variant="outlined"
        onChange={(e) => {
          setInputMemorie(e.target.value);
        }}
        value={inputMemorie}
      />
      <div className="container-body">
        {memories
          .filter((memorie) => {
            return (
              memorie.title.toLowerCase().includes(inputMemorie) ||
              memorie.tag.toLowerCase().includes(inputMemorie)
            );
          })
          .map((response) => {
            return (
              <CardHome
                image={response.image}
                name={capitalizarPrimeraLetra(response.title)}
              />
            );
          })}
      </div>
    </div>
  );
};
