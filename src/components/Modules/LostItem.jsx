import styled from "styled-components"


const LostItem = () => {
    return (
        <>
            <Container>
                <ItemImg></ItemImg>
                <ItemContent>
                    <h3>분실물 이름 :</h3>
                    <p>분실된 시간 :</p>
                    <p>등록된 시간 :</p>
                    <p>분실된 교실 :</p>
                </ItemContent>
            </Container>

        </>
    )

}

const Container = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 25px;
    overflow: hidden;
    border: 1px solid #000;
`

const ItemImg = styled.div`
    width: 100%;
    height: 200px;
    background-color: #000099;
    background-image: url();
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const ItemContent = styled.p`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
`


export default LostItem