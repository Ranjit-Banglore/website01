import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './Profile.css';

export default class Antoin extends Component {
    render() {
        return (
            <div>
                <Image src="/country/fr-01.jpg" className="header-image" fluid />
                <Container>
                    <Col  >
                        <Image src="/assets/pic-01.jpg" className="antoin-profile-pic" rounded />
                        <h3>Antoin</h3>
                        <p>
                            France  is a country whose territory consists of metropolitan France in Western Europe and several overseas regions and territories. The metropolitan area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is bordered by Belgium, Luxembourg and Germany to the northeast, Switzerland and Italy to the east, and Andorra and Spain to the south. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian oceans. The country's 18 integral regions (five of which are situated overseas) span a combined area of 643,801 square kilometres (248,573 sq mi) and a total population of 67.02 million (as of July 2019). France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice.
</p>
                        <p>
                            During the Iron Age, what is now metropolitan France was inhabited by the Gauls, a Celtic people. Rome annexed the area in 51 BC, holding it until the arrival of Germanic Franks in 476, who formed the Kingdom of Francia. The Treaty of Verdun of 843 partitioned Francia into East Francia, Middle Francia and West Francia. West Francia, which became the Kingdom of France in 987, emerged as a major European power in the Late Middle Ages, following its victory in the Hundred Years' War (1337–1453). During the Renaissance, French culture flourished and a global colonial empire was established, which by the 20th century would become the second largest in the world. The 16th century was dominated by religious civil wars between Catholics and Protestants (Huguenots). France became Europe's dominant cultural, political, and military power in the 17th century under Louis XIV. In the late 18th century, the French Revolution overthrew the absolute monarchy, establishing one of modern history's earliest republics and drafting the Declaration of the Rights of Man and of the Citizen, which expresses the nation's ideals to this day.
</p>
                        <p>
                            In the 19th century, Napoleon took power and established the First French Empire. His subsequent Napoleonic Wars (1803–15) shaped the course of continental Europe. Following the collapse of the Empire, France endured a tumultuous succession of governments culminating with the establishment of the French Third Republic in 1870. France was a major participant in World War I, from which it emerged victorious, and was one of the Allies in World War II, but came under occupation by the Axis powers in 1940. Following liberation in 1944, a Fourth Republic was established and later dissolved in the course of the Algerian War. The Fifth Republic, led by Charles de Gaulle, was formed in 1958 and remains today. Algeria and nearly all the other colonies became independent in the 1960s, with most retaining close economic and military connections with France.
</p>
                        <p>
                            France has long been a global centre of art, science, and philosophy. It hosts the world's fourth-largest number of UNESCO World Heritage Sites and is the leading tourist destination, receiving around 83 million foreign visitors annually. France is a developed country with the world's sixth-largest economy by nominal GDP, and tenth-largest by purchasing power parity. In terms of aggregate household wealth, it ranks fourth in the world. France performs well in international rankings of education, health care, life expectancy, and human development. France is considered a great power in global affairs, being one of the five permanent members of the United Nations Security Council with the power to veto and an official nuclear-weapon state. It is a leading member state of the European Union and the Eurozone, and a member of the Group of 7, North Atlantic Treaty Organization (NATO), Organisation for Economic Co-operation and Development (OECD), the World Trade Organization (WTO), and La Francophonie.
</p>
                    </Col>
                </Container>

            </div>
        )
    }
}