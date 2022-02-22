

import { Layout } from "antd"

import './Footer.scss'
export default function Footer(){
    const { Header, Content, Footer } = Layout;
    return (
        <>
             <Footer className="footer">
                 <p>David Berdiell Sanchez</p>
             </Footer>
        </>
    )
}