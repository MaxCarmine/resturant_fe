import React from "react";
import CardLoading from "./cardLoading";
import {Col, Row} from "react-bootstrap";

const CardLoadingSection = () => (
    <Row>
        {
            Array.apply(null, { length: 12 }).map((_, idx) => (
                <Col lg={4} md={4} sm={4} xl={4} xs={4} key={`card_loading_${idx}`}>
                    <CardLoading />
                </Col>
            ))
        }
    </Row>
)

export default CardLoadingSection