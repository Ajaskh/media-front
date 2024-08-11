import React, { useEffect, useState } from 'react'
import { deleteVideoHistory, getHistory } from '../service/allapi'
import { Table } from 'react-bootstrap'
import { Trash, Trash2 } from 'react-feather'

function WatchHistory() {

  const [History, setHistory] = useState([])

  useEffect(() => {
    getWatchHistory()

  }, [])



  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data)
  }
  // console.log(History);

  const removeHistory = async (id) => {
    await deleteVideoHistory(id)
    //to get remaining history
    getWatchHistory()
  }

  return (
    <>

      <h1 className='mt-4'>Watch History</h1>

      <div className='container border border-2 rounded border-secondary  mt-5 mb-5' style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 className='mt-4 mb-4'>Watch history</h3>

        </div>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>CARD NAME</th>
                <th>URL</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>

              {
                History?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.cardname}</td>
                    <td>{item?.url}</td>
                    <td>{item?.Date}</td>
                    <td><Trash2 onClick={() => removeHistory(item?.id)} color='red'/></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>


    </>
  )
}

export default WatchHistory