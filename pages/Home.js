import Image from "next/image";

const Home = () => {
    return (
        <>
            <div>
                <div style={{
                    position: 'relative',
                    marginTop: "90px",
                    display: "flex",           // Ensure items are laid out in a row
                    justifyContent: 'center',  // Center the entire content horizontally
                    gap: '20px',               // Add some space between the circles
                }}>
                    {/* Circle 1 */}
                    <div style={{
                        position: 'relative',
                        border: "3px solid brown",
                        borderRadius: "50%",
                        height: "60px",
                        width: "60px",
                    }}>
                        <div style={{
                            border: "1px solid red",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            margin: "auto",
                            padding: "5px", // Padding between the image and outer circle
                        }}>
                            <Image
                                src="/wonge1.jpg"
                                alt="1"
                                fill
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Circle 2 */}
                    <div style={{
                        position: 'relative',
                        border: "3px solid brown",
                        borderRadius: "50%",
                        height: "60px",
                        width: "60px",
                    }}>
                        <div style={{
                            border: "1px solid red",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            margin: "auto",
                            padding: "5px", // Padding between the image and outer circle
                        }}>
                            <Image
                                src="/wonge1.jpg"
                                alt="1"
                                fill
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Circle 3 */}
                    <div style={{
                        position: 'relative',
                        border: "3px solid brown",
                        borderRadius: "50%",
                        height: "60px",
                        width: "60px",
                    }}>
                        <div style={{
                            border: "1px solid red",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            margin: "auto",
                            padding: "5px", // Padding between the image and outer circle
                        }}>
                            <Image
                                src="/wonge1.jpg"
                                alt="1"
                                fill
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Circle 4 */}
                    <div style={{
                        position: 'relative',
                        border: "3px solid brown",
                        borderRadius: "50%",
                        height: "60px",
                        width: "60px",
                    }}>
                        <div style={{
                            border: "1px solid red",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            margin: "auto",
                            padding: "5px", // Padding between the image and outer circle
                        }}>
                            <Image
                                src="/wonge1.jpg"
                                alt="1"
                                fill
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
