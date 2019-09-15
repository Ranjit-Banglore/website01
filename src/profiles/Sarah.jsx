import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './Profile.css';

export default class Sarah extends Component {
    render() {
        return (
            <div>
                <Image src="/assets/berlin-01.jpg" className="header-image" fluid />
                <Container>
                    <Col xs={12} sm={8} >
                        <Image src="/assets/pic-02.jpg" className="ranjit-profile-pic" rounded />
                        <h3>Ranjit Patel</h3>
                        <p>
                            The History of India begins with the birth of the Indus Valley Civilization,
                             more precisely known as Harappan Civilization. It flourished around 2,500 BC, in the western part
                              of South Asia, what today is Pakistan and Western India. The Indus Valley was home to the largest
                               of the four ancient urban civilizations of Egypt, Mesopotamia, India and China. Nothing was known
                               about this civilization till 1920s when the Archaeological Department of India carried out excavations
                                in the Indus valley wherein the ruins of the two old cities, viz. Mohenjodaro and Harappa were
                                unearthed. The ruins of buildings and other things like household articles, weapons of war, gold and
                                 silver ornaments, seals, toys, pottery wares, etc., show that some four to five thousand years ago
                                 a highly developed Civilization flourished in this region.
                        </p>
                    </Col>
                </Container>
                About page
            </div>
        )
    }
}