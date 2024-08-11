import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../service/allapi';
import { v4 as uuidv4 } from 'uuid';

function VideoCard({ card, handleDeleteStatus, insideCategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const uid = uuidv4()
    console.log(uid);

    const cardTime = new Date()
    console.log(cardTime);

    const { caption, url } = card

    if (uid != "", caption != "", url != "", cardTime != "") {
      const body = {
        id: uid,
        cardname: caption,
        url,
        Date: cardTime
      }

      const res = await addHistory(body)
      // console.log(res.data);
    }
  }

  // to remove/delete a card using an API call

  const removeItem = async (id) => {
    // make an API call for delete
    const res = await deleteVideo(id)
    // console.log(res);

    if (res.status >= 200 && res.status < 300) {
      handleDeleteStatus(true)
    }
  }


  // define drag started
  const dragStarted = (e, id) => {
    console.log("drag started & source card id:" + id);
    e.dataTransfer.setData("cardId", id)
  }

  return (
    <>
      <div>

        <Card className='shadow mt-2' draggable onDragStart={e => dragStarted(e, card?.id)}>
          <Card.Img onClick={handleShow} variant="top" height={'200px'} src={card?.thumbnail} />
          <Card.Body>
            <Card.Title>
              <span>{card?.caption}</span>
              <span>

                {
                  insideCategory?"":
                  <Trash2 onClick={() => removeItem(card?.id)} color='red' style={{ float: 'right' }} />
                }

              </span>
            </Card.Title>

          </Card.Body>
        </Card>

        {/* model */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Video Caption</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <iframe width={'100%'} height={'400px'} src={`${card?.url}?autoplay=1`} title="Sesham Mike-il Fathima Trailer| Kalyani Priyadarshan |Hesham|The Route |Passion Studios|Manu C Kumar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </Modal.Body>
        </Modal>

      </div>
    </>
  )
}

export default VideoCard