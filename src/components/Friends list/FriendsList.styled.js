import styled from 'styled-components';

const FriendsList = styled.ul`
display: flex;
gap:7px;
flex-direction:column;
margin-top:20px;
`
const List = styled.li`
display: flex;
align-items: center;

padding :5px;

background-color:${p => p.theme.colors.background};
border: ${p => p.theme.borders.gray};
border-radius: ${p=>p.theme.radii.md};
box-shadow: ${p => p.theme.shadows.normal};

`
const FriendStatus = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-right :5px;
/* background-color: ${({ isOnline }) => isOnline ? '#00b300' : '#ff0000'}; */
background-color: ${({ theme, isOnline }) => isOnline ? theme.colors.green : theme.colors.red };
`
const FriendImg = styled.img`
border: ${p => p.theme.borders.gray};
border-radius :${p => p.theme.radii.md};
margin-right:5px;

`
const FriendName = styled.p`

`


export { List, FriendsList, FriendStatus, FriendImg, FriendName }