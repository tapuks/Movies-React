import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './Loading.scss'

export default function Loading(){
    const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
    return (

        <div className='loading'>
            <Spin indicator={antIcon} />
            <h5>Cargando...</h5>
        </div>
    )
}