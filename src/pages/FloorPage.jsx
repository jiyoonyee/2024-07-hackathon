import styled from "styled-components"
import Aside from "../components/Aside"

const FloorPage = () => {
    return(
        <>
            <Main className="LostItemMain">
                <Aside></Aside>
                <img style={{width:"500px"}} src="../src/assets/floor3.png" useMap="#image-map"></img>

                <map name="image-map">
                    <area className="classRome" target="" alt="301" title="301" href="#" coords="1,229,121,230,121,165,164,165,162,285,1,281" shape="poly"></area>
                    <area className="classRome" target="" alt="3-corridor" title="3-corridor" href="#" coords="165,167,285,165,285,139,924,136,925,198,308,199,308,286,163,285" shape="poly"></area>
                    <area className="classRome" target="" alt="302" title="302" href="#" coords="310,280,312,199,449,198,451,284" shape="poly"></area>
                    <area className="classRome" target="" alt="303" title="303" href="#" coords="548,282,548,200,451,198,451,283" shape="poly"></area>
                    <area className="classRome" target="" alt="304" title="304" href="#" coords="647,282,644,199,550,200,548,283" shape="poly"></area>
                    <area className="classRome" target="" alt="305" title="305" href="#" coords="789,281,786,202,650,200,650,284" shape="poly"></area>
                    <area className="classRome" target="" alt="306" title="306" href="#" coords="925,280,926,202,790,200,792,282" shape="poly"></area>
                    <area className="classRome" target="" alt="307" title="307" href="#" coords="595,5,757,7,759,133,596,135" shape="poly"></area>
                    <area className="classRome" target="" alt="308" title="308" href="#" coords="925,136,926,6,759,5,763,133" shape="poly"></area>
                    <area className="classRome" target="" alt="3-newCorridor" title="3-newCorridor" href="#" coords="929,5,1006,3,1005,33,1037,32,1034,197,1106,197,1105,283,989,285,988,457,927,459" shape="poly"></area>
                    <area className="classRome" target="" alt="3-bathroom" title="3-bathroom" href="#" coords="1105,167,1038,104,1038,197,1106,196" shape="poly"></area>
                    <area className="classRome" target="" alt="309" title="309" href="#" coords="1108,454,1107,283,990,284,988,458" shape="poly"></area>
                    <area className="classRome" target="" alt="310" title="310" href="#" coords="1134,457,927,461,926,562,994,567,1136,491" shape="poly"></area>
                </map>
            </Main>
            
        </>
    )
}
const Main = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default FloorPage