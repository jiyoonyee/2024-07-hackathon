import Aside from "../components/Layouts/Aside"
import styled from "styled-components"

const LostItemListPage = () => {
    return(
        <>
            <Main className="LostItemMain">
                <Aside></Aside>
            </Main>
            
        </>       
    )
}

const Main = styled.div`
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
`

export default LostItemListPage