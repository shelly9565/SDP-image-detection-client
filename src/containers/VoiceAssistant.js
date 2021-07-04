

import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Modal from '../components/modal/Modal'
import socket from '../api/socket'
const commands = [
    {
        command: 'hey silly',
        callback: (command) => {
            openSilly()
        }
    }
]
const openSilly = () => {
    window.open('https://eu-west-2.sumerian.aws/ca67184efede4b7882bcbf48057e74d6.scene', 'avatar', 'width=600,height=400');
}
export const VoiceAssistant = ({ posts, children }) => {
    const [chosen, setChosen] = useState(null)
    const [showModal, setshowModal] = useState(false)
    const { transcript } = useSpeechRecognition({ commands })
    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            alert('microphone not working check browser support ')
        }
        else {
            console.log(`microphone is connected`)
            SpeechRecognition.startListening({ continuous: true });
        }
        return () => {
            socket.close();
        }
    }, [])
    useEffect(() => {
        console.log(`posts`, posts)

        socket.on('happy', (socket) => {
            let happy;

            if (posts.length) {
                happy = posts.reduce((prev, current) => {
                    if (prev.data.face_detection || current.data.face_detection) return prev;
                    else
                        return prev.data.face_detection.faceAttributes.emotion.happiness >
                            current.data.face_detection.faceAttributes.emotion.happiness
                            ? prev
                            : current
                }
                );
            }
            console.log(`happ`, happy)

            setChosen({ content: happy, title: "You are the HAPPIEST person out here!" })

            setshowModal(true)

        })
        socket.on('safe', (socket) => {
            let safe;
            console.log(posts);
            if (posts.length) {
                safe = posts.find((p) => p.mask.hasMask && p.mask.fullCover);

                if (!safe) {
                    safe = posts.find((p) => p.mask.hasMask);
                }
            }
            setChosen({ content: safe, title: "You are the SAFEST person out here!" });
            setshowModal(true)

        })
    }, [posts])


    useEffect(() => {
        console.log(`transcript`, transcript)

    }, [transcript])
    return (
        <>
            {children}
            <button onClick={openSilly} style={{ opacity: '0', position: 'absolute', left: '1px', top: '1px', width: '250px', height: '100px' }}>open assistant</button>
            {chosen && <Modal content={chosen.content} title={chosen.title}
                showModal={showModal}
                setShowModal={setshowModal}></Modal>}
        </>
    )
}