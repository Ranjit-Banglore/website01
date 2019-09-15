import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button, Container, Card } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to  living space</h2>
                    <p>This is how you build the website in react-bootrap!!</p>
                    <Link to="/about">
                        <Button variant="primary"> About</Button>
                    </Link>
                </Jumbotron>
                <Container>
                    <hr ></hr>
                    <Row>
                        <Col className="person-wrapper" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-01.jpg" />
                                <Card.Body>
                                    <Card.Title>Antoin</Card.Title>
                                    <Card.Text>
                                        “L’habit ne fait pas le moine”
                                    </Card.Text>
                                    <Button variant="primary" href="/antoin">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-02.jpg" />
                                <Card.Body>
                                    <Card.Title>Ranjit</Card.Title>
                                    <Card.Text>
                                        "जिस की लाठी उस की भैंस"
                                    </Card.Text>
                                    <Button variant="primary" href="/ranjit">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-03.jpg" />
                                <Card.Body>
                                    <Card.Title>Anna</Card.Title>
                                    <Card.Text>
                                        “The secret of getting ahead is getting started.”
                                    </Card.Text>
                                    <Button variant="primary" href="/anna">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr ></hr>
                    <Row>
                        <Col className="person-wrapper" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-04.jpg" />
                                <Card.Body>
                                    <Card.Title>Robin</Card.Title>
                                    <Card.Text>
                                        "The grass is greener on the other side."
                                    </Card.Text>
                                    <Button variant="primary" href="/robin">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-05.jpg" />
                                <Card.Body>
                                    <Card.Title>PK</Card.Title>
                                    <Card.Text>
                                        “Man skal ikke skue hunden på hårene”
                                    </Card.Text>
                                    <Button variant="primary" href="/pk">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-06.jpg" />
                                <Card.Body>
                                    <Card.Title>Nicole</Card.Title>
                                    <Card.Text>
                                        “Kinder und Betrunkene sagen immer die Wahrheit .”
                                    </Card.Text>
                                    <Button variant="primary" href="/nicole">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr ></hr>
                    <Row>
                        <Col className="person-wrapper" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-07.jpg" />
                                <Card.Body>
                                    <Card.Title>Martha</Card.Title>
                                    <Card.Text>
                                        “Belle parole non pascon i gatti.”
                                    </Card.Text>
                                    <Button variant="primary" href="/martha">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-08.jpg" />
                                <Card.Body>
                                    <Card.Title>Aroune</Card.Title>
                                    <Card.Text>
                                        “L’habit ne fait pas le moine”
                                    </Card.Text>
                                    <Button variant="primary" href="/aroune">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-09.jpg" />
                                <Card.Body>
                                    <Card.Title>Robert</Card.Title>
                                    <Card.Text>
                                        “Das Leben ist kein Ponyhof”
                                    </Card.Text>
                                    <Button variant="primary" href="/robert">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr ></hr>
                    <Row>
                        <Col className="person-wrapper" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-10.jpg" />
                                <Card.Body>
                                    <Card.Title>Sarah</Card.Title>
                                    <Card.Text>
                                        “Übung macht den Meister.”
                                    </Card.Text>
                                    <Button variant="primary" href="/sarah">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-11.jpg" />
                                <Card.Body>
                                    <Card.Title>New member</Card.Title>
                                    <Card.Text>
                                        “L’habit ne fait pas le moine”
                                    </Card.Text>
                                    <Button variant="primary" href="/aroune">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="person-wrapper">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/pic-12.jpg" />
                                <Card.Body>
                                    <Card.Title>Wedding</Card.Title>
                                    <Card.Text>
                                        “L’habit ne fait pas le moine”
                                    </Card.Text>
                                    <Button variant="primary" href="/martha">details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}