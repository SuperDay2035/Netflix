import styled from "styled-components";

const Watchstyle = styled.div `

    .watch{
        background-color: black;
        color: white;
        padding: 2rem;
        
        .watch-section{
            margin: 0 auto;
            max-width: 1200px;
            display: flex;
            align-items: center;
            
            .watch-sentence{
                width: 49%;
                h1{
                    font-size: 2.4rem;
                }
                
                p{
                    font-size: 1.4rem;
                    padding: 1rem 0;
                }
            }
            
            .watch-img{
                width: 49%;
                
                img{
                    width: 100%;
                }
            }
        }
        
    }
    
    @media (max-width: 768px) {
        .watch{
            background-color: black;
            color: white;
            padding: 2rem;

            .watch-section{
                margin: 0 auto;
                max-width: 1200px;
                display: flex;
                align-items: center;

                .watch-sentence{
                    width: 49%;
                    h1{
                        font-size: 1.5rem;
                    }

                    p{
                        font-size: 0.9rem;
                        padding: 1rem 0;
                    }
                }

                .watch-img{
                    width: 49%;

                    img{
                        width: 100%;
                    }
                }
            }

        }
    }
    @media (max-width: 590px) {
        .watch{
            background-color: black;
            color: white;
            padding: 2rem;
            text-align: center;
            .watch-section{
                margin: 0 auto;
                max-width: 1200px;
                display: inline-block;
                

                .watch-sentence{
                    width: 100%;
                    h1{
                        font-size: 1.5rem;
                    }

                    p{
                        padding: 1rem 0;
                    }
                }

                .watch-img{
                    width: 100%;

                    img{
                        width: 100%;
                    }
                }
            }

        }
    }
    .grey-border{
        border: 1px solid grey;
        width: 100%;
    }
    
    
`;

export default Watchstyle;