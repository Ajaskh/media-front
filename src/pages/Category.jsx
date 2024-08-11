import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addCategory, deleteCategory, getCategory, getVideos, updateCategory } from '../service/allapi';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';
import VideoCard from './VideoCard'

function Category() {

  // const[allCategory,setallCategory]=useState([])



  const [uploadData, setuploadData] = useState({
    id: "",
    name: "",
    allVideos: []
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // state for storing category
  const [allCategories, setallCategories] = useState([])

  // setInput function definiton
  const setInput = (e) => {

    const { name, value } = e.target

    // ... rest operator -> objectine ellam orumich kaanikkan vendi spread use cheyyunnu, ath upayogikkunnath statil aaane.
    setuploadData({ ...uploadData, [name]: value })
    // setuploadData(e.target.value)

  }
  // console.log(uploadData);   07/12 13:27

  // define handleAdd function
  const handleAdd = async (e) => {
    e.preventDefault()

    // destructure cheyyunnu  
    const { id, name } = uploadData

    if (!id || !name) {
      // alert("please fill the form completely")
      toast.warning("please fill the form completely", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      // api call
      let response = await addCategory(uploadData)

      if (response.status >= 200 && response.status < 300) {
        // console.log(response.data);

        setShow(false)
        toast.success("Category uploaded successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getallCategory()
      }
      else {
        toast.warning("Please provide a unique id", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }


  // page load cheyyumbol automatic aayi kaanikkan vendi
  useEffect(() => {
    getallCategory()
  }, [])

  // define a function foe API call that shows category

  const getallCategory = async () => {
    // API call
    const response = await getCategory()
    // console.log(response.data);
    setallCategories(response.data)
  }
  console.log(allCategories);



  // delete category

  const handleDeleteCategory = async (e, id) => {
    e.preventDefault()

    // API call for delete category
    const res = await deleteCategory(id)
    // console.log(res);
    getallCategory()
  }


  // define dragover function

  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragging over the category");
  }


  // define dropped function
  const dropped = async (e, categoryId) => {
    // e.preventDefault()
    console.log("Category id:", categoryId);
    let sourceCardId = e.dataTransfer.getData("cardId")
    console.log("source card id:", sourceCardId);

    const { data } = await getVideos(sourceCardId)
    console.log(data);

    let selectedCategory = allCategories.find(item => item.id == categoryId)
    console.log("target categoryDetails", selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log("updated category details:", selectedCategory);
    await updateCategory(categoryId, selectedCategory)
    getallCategory()

  }

  return (
    <>

      {/* d-grid = automatically increase the size of button */}
      <div className='d-grid'>

        <div className='btn btn-dark' onClick={handleShow}>Add Category</div>

      </div>

      {
        allCategories.map(item => (

          <div droppable onDragOver={e => dragOver(e)} onDrop={e => dropped(e, item?.id)}>

            <div className='border rounded mt-3 p-3'>

                <div className='d-flex justify-content-between'>
                  <h4>{item?.name}</h4>
                  <span onClick={e => handleDeleteCategory(e, item?.id)}> <Trash2 color='red' /></span>
  
                </div>
                <Row>

                  {
                    item?.allVideos.map((card) => (
                      <Col lg={6} md={6} sm={12}>

                        <VideoCard card={card} insideCategory={true} />
                      </Col>
                    ))
                  }
                </Row>

            </div>

          </div>

        ))
      }





      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>

            <FloatingLabel className='mb-3' controlId="floatingid" label="Id">
              <Form.Control name='id' onChange={setInput} type="text" placeholder="Category id" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingcaption" label="Caption">
              <Form.Control name='name' onChange={setInput} type="text" placeholder="Caption" />
            </FloatingLabel>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  )
}

export default Category