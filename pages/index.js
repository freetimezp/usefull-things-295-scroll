"use client";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";

import AnimatedCopy from "./components/AnimatedCopy";

export default function Home() {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }
        gsap.ticker.add(update);

        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <>
            <ReactLenis root ref={lenisRef}></ReactLenis>

            <section className="hero">
                <img src="/images/img1.jpg" alt="" />
            </section>

            <section className="about">
                <div className="header">
                    <h1>A new chapter in vibe coding..</h1>
                </div>

                <div className="copy">
                    <AnimatedCopy>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, necessitatibus laudantium
                            vitae quod quisquam sapiente numquam, quasi laborum similique tenetur odio, magnam hic
                            voluptatum qui. Suscipit nam ad, vero aliquid voluptatem nemo officia beatae explicabo
                            tenetur harum dolore aliquam porro deleniti in quo eius doloremque deserunt cumque atque
                            voluptatibus recusandae!
                        </p>
                    </AnimatedCopy>
                </div>
            </section>

            <section className="banner-img">
                <img src="/images/img2.jpg" alt="" />
            </section>

            <section className="services">
                <div className="service">
                    <div className="col">
                        <div className="service-copy">
                            <h3>Developing</h3>

                            <AnimatedCopy>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos quos
                                    soluta culpa repellendus. Sapiente quisquam veritatis molestiae ipsum autem soluta,
                                    magnam ratione quam non excepturi iusto quae est impedit officiis ipsa dolore
                                    voluptates quia tempora, provident sequi dolorem aut porro. Voluptates assumenda
                                    debitis dolor.
                                </p>
                            </AnimatedCopy>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/images/service.jpg" alt="" />
                    </div>
                </div>
                <div className="service">
                    <div className="col">
                        <img src="/images/service.jpg" alt="" />
                    </div>
                    <div className="col">
                        <div className="service-copy">
                            <h3>Design</h3>

                            <AnimatedCopy>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos quos
                                    soluta culpa repellendus. Sapiente quisquam veritatis molestiae ipsum autem soluta,
                                    magnam ratione quam non excepturi iusto quae est impedit officiis ipsa dolore
                                    voluptates quia tempora, provident sequi dolorem aut porro. Voluptates assumenda
                                    debitis dolor.
                                </p>
                            </AnimatedCopy>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="col">
                        <div className="service-copy">
                            <h3>Coding</h3>

                            <AnimatedCopy>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos quos
                                    soluta culpa repellendus. Sapiente quisquam veritatis molestiae ipsum autem soluta,
                                    magnam ratione quam non excepturi iusto quae est impedit officiis ipsa dolore
                                    voluptates quia tempora, provident sequi dolorem aut porro. Voluptates assumenda
                                    debitis dolor.
                                </p>
                            </AnimatedCopy>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/images/service.jpg" alt="" />
                    </div>
                </div>
                <div className="service">
                    <div className="col">
                        <img src="/images/service.jpg" alt="" />
                    </div>
                    <div className="col">
                        <div className="service-copy">
                            <h3>Engineering</h3>

                            <AnimatedCopy>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos quos
                                    soluta culpa repellendus. Sapiente quisquam veritatis molestiae ipsum autem soluta,
                                    magnam ratione quam non excepturi iusto quae est impedit officiis ipsa dolore
                                    voluptates quia tempora, provident sequi dolorem aut porro. Voluptates assumenda
                                    debitis dolor.
                                </p>
                            </AnimatedCopy>
                        </div>
                    </div>
                </div>
            </section>

            <section className="outro">
                <h3>Innovation has no finish line..</h3>
            </section>
        </>
    );
}
