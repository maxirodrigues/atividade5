import React from 'react';
import {  Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {Container, Subcontainer, TitleFilme, TextNormal} from '../styles';



const FlatComponent = ({ data }) => {

  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Detalhes', { data: data });
  }


  return (
   
    <Container onPress={navegar} >
      <Image source={{ uri: data.image }} resizeMode="contain" style={{ width: 150, height: 150} } />   
      <Subcontainer>
        <TitleFilme>{data.filme}</TitleFilme>
        <TextNormal>{data.ano}</TextNormal>
        <TextNormal>{data.estilo}</TextNormal>
      </Subcontainer>
    </Container>
  );
}


export default FlatComponent;