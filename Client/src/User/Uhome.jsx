import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'


const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      
      <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Best Seller</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Harry Potter and the Philosopher's Stone</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81F90H7hnML.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Atomic Habits</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/2/x/p/apj-abdul-kalam-wings-of-fire-an-autobiography-with-arun-tiwari-original-imagt3yszh9wfznf.jpeg?q=90&crop=false" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Apj Abdul Kalam Wings Of Fire</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91A-mVzve3L._UF1000,1000_QL80_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>True Crime Stories</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
  <br/>
  <br/>
  <br/>
  <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Top Recomendation</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>HARRY POTTER</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>The Psychology of Money Book</Card.Title>
    </Card.Body>
  </Card>
</div>
</div>
</div>
      </div>
      <br/>
     <Footer/>
          </div>
  )
}

export default Uhome