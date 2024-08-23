import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const StyledHeader = styled.header`
background-color: #393939;
box-shadow: 0 3px 3px rgba(0,0,0,0.2);
display: grid;
grid-template-columns: 220px 1fr 200px;
grid-column-gap: 20px;
`;

const LogoLink = styled.a`
color: #fff;
display: inline-block;
padding: 0px 15px;
text-decoration: none;
svg {
  display: inline-block;
  padding-top: 10px;
  float: left;
}
span {
  padding-left: 10px;
  font-size: 1.2rem;
  line-height: 50px;  
}
b {
  font-weight: bold;
  padding-left: 2px;
}
`;

const SearchInput = styled.input`
width:100%;
display: inline-block;
box-sizing: border-box;
border-radius: 3px;
border: 1px solid #777;
background: rgba(0,0,0,.1);
padding: 8px 10px;
margin-top: 10px;
`;

const ProfileLink = styled.a`
color: #fff;
text-decoration: none;
line-height: 50px;
`;

function Header () {
  return (
    <StyledHeader>
      <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
        <span>
        스택
        <b>오버클론우</b>
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput type="text" placeholder="검색하시우..."/>
      </form>
      <ProfileLink href="" className="profile">누구인가</ProfileLink>
    </StyledHeader>
  )
}

export default Header;