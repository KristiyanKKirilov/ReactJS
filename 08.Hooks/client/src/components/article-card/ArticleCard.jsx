import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArticleCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1177502660/photo/young-woman-reading-the-news-on-a-modern-tablet-computer-while-sitting-in-her-living-room.jpg?s=612x612&w=0&k=20&c=oEfXfMaKkgAVfshd7yk_bxGk2iQncWueLVlTL__gWWg=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.   
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
