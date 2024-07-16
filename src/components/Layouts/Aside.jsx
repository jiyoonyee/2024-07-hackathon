import styled from "styled-components"

const Aside = () =>{
    return(
        <>
            <AsideWrap>
                <Floor>4F</Floor>
                <Floor>3F</Floor>
                <Floor>2F</Floor>
                <Floor>1F</Floor>
                <Floor>B1</Floor>
                <Floor>B2</Floor>
            </AsideWrap>
        </>
    )
}

const AsideWrap = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    border-right: 1px solid black;
    height: 100vh;
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 30px;
`
const Floor = styled.p`
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 5vh;
    
`

export default Aside