import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, NavLink} from 'react-router-dom';
import styles from './ArticleCard.module.css';


export default function ArticleCard({
    _id,
    title,
    imageUrl
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.   
        </Card.Text> */}
        <Button as={Link} to={`${_id}`} className={styles['details-btn']} variant="danger">Details</Button>
      </Card.Body>
    </Card>
  );
}
