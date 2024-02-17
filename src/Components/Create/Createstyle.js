import styled from "styled-components";

const Createstyle = styled.div`

    .Create{
        background-color: black;
        color: white;
        padding: 2rem;
        
        .create-section{
            margin: 0 auto;
            max-width: 1200px;
            display: flex;
            align-items: center;
            
            .create-img{
                width: 49%;
                
                img{
                    width: 100%;
                }
                
            }

            .create-sentence{
                width: 49%;
                margin-left: 1rem;

                h1{
                    font-size: 2.4rem;
                }
                
                p{
                    font-size: 1.3rem;
                    padding: 1rem 0;
                }
            }
        }
        
    }

    .grey-border{
        border: 1px solid grey;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .Create{
            background-color: black;
            color: white;
            padding: 2rem;

            .create-section{
                margin: 0 auto;
                max-width: 1200px;
                display: flex;
                align-items: center;

                .create-img{
                    width: 49%;

                    img{
                        width: 100%;
                    }

                }

                .create-sentence{
                    width: 49%;
                    margin-left: 1rem;

                    h1{
                        font-size: 1.5rem;
                    }

                    p{
                        font-size: 0.9rem;
                        padding: 1rem 0;
                    }
                }
            }

        }
        
    }
    @media (max-width: 590px) {
        .Create{
            background-color: black;
            color: white;
            padding: 2rem;

            .create-section{
                margin: 0 auto;
                max-width: 1200px;
                text-align: center;
                display: block;

                .create-img{
                    width: 100%;

                    img{
                        width: 100%;
                    }

                }

                .create-sentence{
                    width: 100%;
                    margin-left: 1rem;

                    h1{
                        font-size: 1.5rem;
                    }

                    p{
                        font-size: 0.9rem;
                        padding: 1rem 0;
                    }
                }
            }

        }
        
    }
    
    
`;

export default Createstyle;