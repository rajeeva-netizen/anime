import { Row, Col } from 'antd';
import Login from './login';
import Signup from './signup';
import Animecard from './AnimeCard';
import {Link} from "react-router-dom"
const Main =()=>{
    return(
        <>
       
        <Row>
      <Col span={8}></Col>
      <Col span={8}>
          {/* <Login/> */}
          <Animecard/>
      </Col>
      <Col span={8}></Col>
    </Row>
        </>
    )
}

export default Main