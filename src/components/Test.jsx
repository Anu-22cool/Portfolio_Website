import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function DarkVariantExample() {
  return (
    <div name="Experience" className="text-white accordion-container" style={{ maxWidth: '900px', margin: '30px auto', marginTop: '20px', height: '400px' }}>   
      <h1 className="underline text-3xl font-bold mb-5">Experience</h1> 
        <p  >I have hands-on experience with the following technologies:</p>
      <Carousel data-bs-theme="dark" >
    
      <Carousel.Item>
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <CardGroup>
        <Card className="text-center">
        <Card.Title>Web Technologies</Card.Title>
      <Card.Body className="d-flex justify-content-around align-items-center" style={{ backgroundColor: 'white' }}>
       
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '300px', height: '300px' }}/>
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '300px', height: '300px' }}/>
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '300px', height: '300px' }}/>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
     
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <CardGroup>
        <Card className="text-center">
        <Card.Title>Web Technologies</Card.Title>
      <Card.Body className="d-flex justify-content-around align-items-center" style={{ backgroundColor: 'white' }}>
       
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '100px', height: '100px' }}/>
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '100px', height: '100px' }}/>
        <Card.Img variant="top" src="../../public/photo.png" style={{ width: '100px', height: '100px' }}/>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
     
    </CardGroup>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default DarkVariantExample;