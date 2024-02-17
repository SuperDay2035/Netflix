import styled from "styled-components";

const Downloadstyle = styled.div `

    .Download{
        background-color: black;
        color: white;
        padding: 4rem;
        
        .download-section{
            margin: 0 auto;
            max-width: 1200px;
            display: flex;
            align-items: center;
            
            .download-img{
                width: 49%;
                
                img{
                    max-width: 100%;
                }
            }
            
            .download-sentence{
                width: 49%;
                margin-left: 1rem;
                h1{
                    font-size: 2.4rem;
                }
                
                p{
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
        
        .Download{
            
            .download-section{
                margin: 0 auto;
                max-width: 1200px;
                display: flex;
                align-items: center;

                .download-img{
                    width: 49%;

                    img{
                        max-width: 100%;
                    }
                }

                .download-sentence{
                    width: 49%;
                    margin-left: 1rem;
                    h1{
                        font-size: 1.3rem;
                    }

                    p{
                        padding: 1rem 0;
                    }
                }
            }
            
        }
        
    }
    @media (max-width: 590px) {
        
        .Download{
            padding: 2rem;
            .download-section{
                margin: 0 auto;
                display: inline-block;
                text-align: center;
                

                .download-img{
                    width: 100%;

                    img{
                        max-width: 100%;
                    }
                }

                .download-sentence{
                    flex-wrap: wrap-reverse;
                    width: 100%;
                    margin-left: 1rem;
                    h1{
                        font-size: 1rem;
                    }

                    p{
                        padding: 0.4rem;
                    }
                }
            }
            
        }
        
    }
    
`;

export default Downloadstyle;