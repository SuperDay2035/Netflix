import styled from "styled-components";

const EnjoyStyle = styled.div`

    .Enjoy{
        background-color: black;
        color: white;
        padding: 2rem 2rem;
        .enjoy-section{
            margin: 0 auto;
            max-width: 1200px;
            display: flex;
            align-items: center;

            .enjoy-sentence{
                width: 49%;
                
                h1{
                    font-size: 2.4rem;
                }
                
                p{
                  padding: 1rem 0;
                }
            }

            .enjoy-video{
                width: 49%;
                
                img{
                    width: 100%;
                }
            }
        }

      


    }
    .grey-border{
        border: 1px solid grey;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .Enjoy{
            background-color: black;
            color: white;
            padding: 2rem 2rem;
            .enjoy-section{
                margin: 0 auto;
                max-width: 1200px;
                display: flex;
                align-items: center;

                .enjoy-sentence{
                    width: 49%;

                    h1{
                        font-size: 1.3rem;
                    }

                    p{
                        font-size: 0.9rem;
                    }

                }
                .enjoy-video{
                    width: 49%;

                    img{
                        width: 100%;
                    }
                }
            }


        }
    }
    @media (max-width: 590px) {
        .Enjoy{
            background-color: black;
            color: white;
            padding: 2rem 2rem;
            .enjoy-section{
                margin: 0 auto;
                max-width: 1200px;
                display: inline-block;
                text-align: center;

                .enjoy-sentence{
                    width: 100%;

                    h1{
                        font-size: 1.3rem;
                    }

                    p{
                        padding: 0.4rem;
                        font-size: 1rem;
                    }
                }

                .enjoy-video{
                    width: 100%;

                    img{
                        width: 100%;
                    }
                }
            }
            

        }
    }
    
`;

export default EnjoyStyle;