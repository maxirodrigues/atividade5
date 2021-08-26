import styled from "styled-components/native";

export const TextFilme = styled.Text`
fontSize: 16px;
color: blue;
fontWeight: bold;
`;

export const Container = styled.TouchableOpacity `
backgroundColor: #78866b;
marginBottom: 8px;
flexDirection: row;
alignItems: center;
`;

export const Subcontainer = styled.View `
marginLeft: 10px;
`;

export const TelaDetalhe = styled.View `
padding:20px;
flex: 1;
borderWidth: 5px; 
marginTop: 6px;
marginBottom: 6px;
borderRadius: 20px;
backgroundColor: beige;
`;

export const TitleFilme = styled.Text`
fontSize: 18px;
fontWeight: bold;
marginRight: 100px;
`;
    
export const TextTitle = styled.Text`
fontSize: 14px;
color: red;
fontWeight: 600;
`;

export const TextNormal = styled.Text`
fontSize: 14px;
color: black;
fontWeight: 400;
textAlign: justify;

`;
