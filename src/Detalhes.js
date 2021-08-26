import React from 'react';
import {Image} from 'react-native';

import { useRoute } from '@react-navigation/native';

import Autolink from 'react-native-autolink';
import {TelaDetalhe, TextFilme, TextTitle, TextNormal} from './styles';

const Detalhes = () => {

  const route = useRoute();

  const data = route.params.data;

  
  return (
    <TelaDetalhe>
        <Image source={{ uri: data.image }} resizeMode="stretch" style={{ width: 140, height: 240}} />
        <TextFilme>{data.filme}</TextFilme>      
          <TextTitle>ANO: </TextTitle><TextNormal>{data.ano}</TextNormal>
          <TextTitle>ESTILO:</TextTitle><TextNormal>{data.estilo}</TextNormal>
          <TextTitle>DESCRIÇÃO:</TextTitle><TextNormal>{data.descricao}</TextNormal>
          <TextTitle>TRAILER:</TextTitle><Autolink  text = {data.trailer}/>  
     </TelaDetalhe>
  );
}

export default Detalhes;