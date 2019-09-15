import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="/assets/berlin-01.jpg" className="header-image" fluid />
                <Container>
                    <Col xs={12} sm={8} >
                        <Image src="/assets/pic-04.jpg" className="about-profile-pic" rounded />
                        <h3>Ranjit Patel</h3>
                        <p>Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[20]
                              Their long occupation, initially in varying forms of isolation as hunter-gatherers,
                               has made the region highly diverse, second only to Africa in human genetic diversity.[21]
                               Settled life emerged on the subcontinent in the western margins of the Indus river basin
                               9,000 years ago, evolving gradually into the Indus valley civilisation of the third millennium BCE.
                               [22] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India
                               from the northwest, unfolding as the language of the Vedas, and recording the dawning of Hinduism
                               in India.[23] The Dravidian languages of India were supplanted in the northern regions.[24] By 400
                                BCE, stratification and exclusion by caste had emerged within Hinduism,[25] and Buddhism and
                                Jainism had arisen, proclaiming social orders unlinked to heredity.[26] Early political
                                consolidations gave rise to the loose-knit Maurya and Gupta empires based in the Ganges basin,[27]
                                 their collective era suffused with wide-ranging creativity,[28] but also marked by the declining
                                 status of women,[29] and the incorporation of untouchability into an organized system of belief.
                                 [e][30] In south India, the Middle kingdoms exported Dravidian-languages
                                  scripts and religious cultures to the kingdoms of southeast Asia.[31]</p>

                    </Col>
                </Container>
                About page
            </div>
        )
    }
}