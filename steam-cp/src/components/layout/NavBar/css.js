import  styled  from 'styled-components'

export const Content = styled.div`
    background-color : #171a21;
    height : 104px;
    font-family : "Motiva Sans", Sans-serif;

    #comunidade-dropdown::after{
      display: none; 
   }
   #administrativo-dropdown::after{
      display: none; 
   }

   .dropdown-menu{
        background-color : #171a21;
   }
`

export const Logo = styled.img`
    width : 176px;
    height : 44px;
`

export const HeaderRow = styled.div`
    width : 100%;
    display : flex;
    justify-content : ${props => props.halign ? props.halign : 'flex-start'};
    font-size : ${props => props.fontSize ? props.fontSize : '14px'};
    
    a{
        color : #b8b6b4;
        
    }
`

export const Link = styled.a`

    padding: ${props => props.padding ? props.padding : '.5rem 1rem' };
    display:  block;
    font-size : ${props=> props.fontSize ? props.fontSize : 'inherit'};

    :hover{
        color : #ffffff;
        text-decoration : none;
    }

`