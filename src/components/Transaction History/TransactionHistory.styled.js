import styled from "styled-components";

const TransactionTable = styled.table`


`
const TableHead = styled.thead`
background-color: #00ffff;

box-shadow: ${p => p.theme.shadows.normal};
:not(:last-child){
border-right: ${p => `${p.theme.borders.normal}${p.theme.colors.white}`};

}
`

const TableBody = styled.tbody`
:first-child{
    text-transform: capitalize;
}
background-color: ${p => p.theme.colors.white};
box-shadow: ${p => p.theme.shadows.normal};
border: ${p => p.theme.borders.gray};
`


const CellHeader = styled.th`
width:170px;
padding: 15px;

text-transform: uppercase;
color: ${p => p.theme.colors.white};
`

const TableRow = styled.tr`
&:nth-child(even){
 background-color: ${p => p.theme.colors.background};
}

`
const CellData = styled.td`
color: ${p => p.theme.colors.grey};
text-align: center;
border: ${p => p.theme.borders.gray};


`



export { CellData, TransactionTable, TableHead, TableBody, CellHeader, TableRow  }