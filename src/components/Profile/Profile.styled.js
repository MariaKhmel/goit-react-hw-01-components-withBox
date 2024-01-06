import styled from 'styled-components';

export const Container = styled.div`
margin-bottom:20px;

`

export const ProfileContainer = styled.div`
background-color: ${p => p.theme.colors.background};
border-radius : ${p => p.theme.radii.lg};
overflow: hidden;
border: ${p => p.theme.borders.gray};
display: flex;
flex-direction:column;

`

export const Avatar = styled.img`
display: block;
  height: 80px;
  border-radius:${p => p.theme.radii.round};
  margin: 20px auto;

`
export const Description = styled.div`
  text-align: center;
  color: ${p => p.theme.colors.grey};
`


export const Name = styled.p`
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.m};
margin-bottom : 10px;
`
export const Tag = styled.p`
margin-bottom : 10px;
`

export const Location = styled.p`
margin-bottom : 20px;
`

export const Stats = styled.ul`
display: inline-flex;
background-color: ${p => p.theme.colors.background};

`
export const StatsItems = styled.li`
border: ${p => p.theme.borders.gray};
padding: 15px;
text-align: center;
width: 100%;

`

export const StatsLable = styled.span`
display: block;
color: ${p => p.theme.colors.grey};

`

export const StatsValue = styled.span`
display: block;
color: ${p => p.theme.colors.black};

`