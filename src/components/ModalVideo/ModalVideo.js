import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

import './ModalVideo.scss'

export default function(props) {

 

    const { videoKey, videoPlatform, isOpen, onCancel} = props
    const [urlVideo, setUrlVideo]= useState(null)

    useEffect(()=> {
        switch(videoPlatform) {
            case "YouTube":
                setUrlVideo(`https//youtu.be/${videoKey}`);
                break;
            case "Vimeo":
                setUrlVideo(`https//vimeo.com/${videoKey}`)
                break
        }
    },[videoKey, videoPlatform])


    return (
        <>
        <Modal className="modal-video"
          visible={isOpen}
          centered
          onCancel={onCancel}
          footer={false}
          >
            <ReactPlayer controls url={urlVideo}></ReactPlayer>
        </Modal>

        </>
    )
}