import styled from "styled-components";

const navstyle = styled.div `


    .home {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/28461a03-c939-4c1e-b6ad-d980e4d2c61d/UZ-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg");
        background-repeat: no-repeat;

        background-size: cover;
        object-fit: cover;

        .home-img {
            width: 100%;
            border: 1px solid red;

            img {
                width: 100%;
                height: 70vh;
                object-fit: cover;
            }
        }

        .Navbar {
            padding: 1.5rem 1.4rem;
            margin: 0 auto;
            max-width: 1200px;
            display: flex;
            align-items: center;
            justify-content: space-between;


            .logo {
                width: 170px;

                img {
                    width: 100%;
                }
            }


            .nav-sign {

                .sign-btn {
                    color: white;
                    background-color: red;
                    padding: 0.5rem;
                    border-radius: 3px;
                }
            }

        }

        .home-page {
            padding: 5rem;

            .page {
                text-align: center;
                font-size: 1.4rem;

                h1 {
                    color: white;
                }

                p {
                    color: white;
                    padding: 1.3rem;
                }
            }

            .form {
                display: flex;
                align-items: center;
                justify-content: center;

                input {
                    padding: 1rem 1.5rem;
                    background-color: #1C2432;
                    color: white;
                    font-size: 1rem;
                    width: 32rem;
                }

                .Get-btn {
                    padding: 1rem 1rem;
                    background-color: red;
                    margin-left: 0.4rem;
                    color: white;
                    font-size: 1.5rem;
                }
            }
        }


    }

    @media (max-width: 768px) {
        .home{
            .Navbar {
                .logo {
                    width: 110px;
                    
                }
            }

            .home-page {
                padding: 5rem;

                .page {
                    text-align: center;
                    font-size: 1rem;

                    h1 {
                        font-size: 1.7rem;
                        color: white;
                    }

                    p {
                        color: white;
                        padding: 1rem;
                    }
                }

                .form {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    input {
                        padding: 1rem 1.5rem;
                        background-color: #1C2432;
                        color: white;
                        font-size: 0.7rem;
                        width: 22rem;
                    }

                    .Get-btn {
                        padding: 0.7rem 0.7rem;
                        background-color: red;
                        margin-left: 0.4rem;
                        color: white;
                        font-size: 0.7rem;
                    }
                }
            }
        }

       
    }

    @media (max-width: 590px) {
        .home{
            .Navbar {
                .logo {
                    width: 110px;

                }
            }

            .home-page {
                padding: 5rem;

                .page {
                    text-align: center;
                    font-size: 1rem;

                    h1 {
                        font-size: 1.7rem;
                        color: white;
                    }

                    p {
                        color: white;
                        padding: 1rem;
                    }
                }

                .form {
                    display: block;
                    text-align: center;
                    input {
                        padding: 0.7rem 0.7rem;
                        background-color: #1C2432;
                        color: white;
                        font-size: 1rem;
                        width: 100%;
                    }

                    .Get-btn {
                        margin-top: 1rem;
                        padding: 0.7rem 0.7rem;
                        background-color: red;
                        margin-left: 0.4rem;
                        color: white;
                        font-size: 1rem;
                    }
                }
            }
        }


    }
    @media (max-width: 475px) {
        .home{
            .Navbar {
                .logo {
                    width: 110px;

                }
            }

            .home-page {
                padding: 1rem;

                .page {
                    text-align: center;
                    font-size: 1rem;

                    h1 {
                        font-size: 2rem;
                        color: white;
                    }

                    p {
                        font-size: 0.9rem;
                        color: white;
                        padding: 1rem;
                    }
                }

                .form {
                    display: block;
                    text-align: center;
                    input {
                        padding: 0.7rem 0.7rem;
                        background-color: #1C2432;
                        color: white;
                        font-size: 1rem;
                        width: 100%;
                    }

                    .Get-btn {
                        margin-top: 1rem;
                        padding: 0.7rem 0.7rem;
                        background-color: red;
                        margin-left: 0.4rem;
                        color: white;
                        font-size: 1rem;
                    }
                }
            }
        }


    }

`;

export default navstyle;