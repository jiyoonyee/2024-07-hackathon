import styled from "styled-components"
import LostItem from "../components/Modules/LostItem"

const MainPage = () => {
    return (
        <>
            <Main_container className="main_container">
                <BgImg></BgImg>
                <LostItem_con className="lost_item_con">
                    <LostItem></LostItem>
                    <LostItem></LostItem>
                    <LostItem></LostItem>
                    <LostItem></LostItem>
                    
                </LostItem_con>
                <LostItem_btn>
                    다른 분실물 찾기
                </LostItem_btn>
            </Main_container>
        </>
    )
}

const Main_container = styled.div`
    width: 100vw;
    margin: 0;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: calc(100vh - 88px);
    position: relative;

`

const LostItem_btn = styled.button`
    width: 200px;
    transition: 0.3s;
    background: #00AE68;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    color: #fff;
    box-shadow: 0px 5px 0px 0px #007144;
    &:hover{
        margin-top: 10px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 0px 0px #007144;
    }
    position: absolute;
    top: 700px;
    right: 50px;
`

const BgImg = styled.div`
    background-image: url(../src/assets/Firefly.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: calc(100vw - 60px);
    height: 500px;
    
`

const LostItem_con = styled.div`
    width: 80vw;
    height: 350px;
    position: relative;
    bottom: 130px;
    display: flex;
    justify-content: center;
    gap: 80px;
`

export default MainPage