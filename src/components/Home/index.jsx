import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import imgCar from '../../assets/img_car.png'
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'

export default function Home() {
    const location = useLocation()
    const isOnHome = location.pathname === '/'

    return (
        <>
            <section className="banner">
                <Container>
                    <Row>
                        <Col xs={12} lg={6} >
                            <p className="banner-text">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </p>
                            <p className="intro-text">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            {isOnHome && (
                                <Link to='/cars'>
                                    <Button className="btn-car">Mulai Sewa Mobil</Button>
                                </Link>
                            )}
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image src={imgCar}  className="img-car" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
