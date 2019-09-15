import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './Profile.css';

export default class Anna extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Image src="/country/ku-01.jpg" className="header-image" fluid />
                </Container>
                <Container>
                    <Col >
                        <Image src="/assets/pic-03.jpg" className="anna-profile-pic" rounded />

                        <h3>Anna</h3>
                        <p>
                            Kuwait  is a country in Western Asia. Situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, it shares borders with Iraq and Saudi Arabia. As of 2016, Kuwait has a population of 4.5 million people: 1.3 million are Kuwaitis and 3.2 million are expatriates.Expatriates account for 70% of the population.
</p>
                        <p>
                            Oil reserves were discovered in commercial quantities in 1938. From 1946 to 1982, the country underwent large-scale modernization. In the 1980s, Kuwait experienced a period of geopolitical instability and an economic crisis following the stock market crash. In 1990, Kuwait was invaded, and later annexed, by Saddam's Iraq. The Iraqi occupation of Kuwait came to an end in 1991 after military intervention by a military coalition led by the United States. Kuwait is a major non-NATO ally of the United States. It is also a major ally of ASEAN, while maintaining a strong relationship with China.
</p>
                        <p>
                            Kuwait is a constitutional sovereign state with a semi-democratic political system. Kuwait has a high-income economy backed by the world's sixth largest oil reserves. The Kuwaiti dinar is the highest valued currency in the world.[14] According to the World Bank, the country has the fourth highest per capita income. The Constitution was promulgated in 1962. Kuwait is home to the largest opera house in the Middle East. The Kuwait National Cultural District is a member of the Global Cultural Districts Network.
</p>
                    </Col>
                </Container>
                About page
            </div>
        )
    }
}