import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'

function View({ serverRes }) {

  // state creation

  const [allVideos, setallVideos] = useState([])

  const [deleteStatus, setdeleteStatus] = useState(false)

  // useEffect

  useEffect(() => {

    getallVideos()

  }, [serverRes, deleteStatus])

  const handleDeleteStatus = (res) => {
    setdeleteStatus(res)
  }



  // define a function for API call
  const getallVideos = async () => {
    // API call
    const response = await getVideo()
    // console.log(response.data);
    setallVideos(response.data)
  }
  console.log(allVideos);

  return (
    <>
      <div className="border p-3 rounded">

        <Row>

          {

            allVideos.map(video => (

              <Col Col sm={12} md={4}>

                <VideoCard card={video} handleDeleteStatus={handleDeleteStatus} />

              </Col>
            ))

          }
        </Row>
      </div >
    </>
  )
}

export default View