import styled from "styled-components"


const Header = () => {
    return(
        <>
            <HeaderWrap className="header" style={{padding:"0px 30px"}}> 
                <img src="../src/assets/logo.png" alt="로고"/>
                <button className="login-button">
                    <img src="../src/assets/google.png" alt="구글" />
                    <p>선생님 로그인</p>
                </button>
            </HeaderWrap>
        </>
    )

}
const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: white;
    width: 100vw;
    height: auto;
`


export default Header