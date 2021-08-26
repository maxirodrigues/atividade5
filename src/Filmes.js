import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import FlatComponent from './components/FlatComponent';


const Lista = () => {


  const data = [
    { key: '0', 
    filme: 'SCOOBY! O filme', 
    ano: 2021, 
    estilo: 'Comédia', 
    direcao: 'Tony Cervone', 
    image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', 
    descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.', 
    trailer:   'https://www.youtube.com/watch?v=MxpDJZDKMyE'
  },
    { key: '1', 
    filme: 'DOCE ENTARDECER NA TOSCANA',
    ano: 2020, 
    estilo: 'Drama', 
    direcao: 'Jacek Borcuch', 
    image: 'https://assets.caixabelasartes.com.br/wp-content/uploads/2020/03/cartaz-doce-entardecer-400x600.jpg',
    descricao: 'Com a chegada de um novo imigrante na cidade, Maria, uma mãe de família tem sua vida virada de cabeça para baixo. Conforme ela se relaciona com o rapaz, um cenário de terrorismo começa a se desenrolar na, até então, calma região da Toscana. ',
    trailer:  'https://www.youtube.com/watch?v=WVTEY5YKJnk'
  },
  { key: '2', 
    filme: 'SPACE JAM: UM NOVO LEGADO',
    ano: 2021, 
    estilo: 'Comédia', 
    direcao: 'Malcolm D. Lee', 
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a4/Space_Jam_A_New_Legacy.jpg/250px-Space_Jam_A_New_Legacy.jpg',
    descricao: 'Pernalonga e sua turma são o alvo de alienígenas que desejam encontrar atrações para seu parque de diversões. Prestes a ser capturado, o coelho propõe apostar sua liberdade num jogo de basquete. Para enfrentar o temível time extraterrestre, Pernalonga convoca ninguém menos do que Michael Jordan.',
    trailer:  'https://youtu.be/t1m7zl8H-kE'
  }
  ]


  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View>
  );
}

export default Lista;