import styled from "styled-components";

const Foteerstyle = styled.div `
    
    .Footer{
        background-color: black;
        color: grey;
        padding: 2rem;
        
        .Footer-section{
            margin: 0 auto;
            max-width: 1200px;
            
            .quest-contact{
                color: grey;
                font-size: 0.8rem;
                padding: 5rem 0;
            }


            .form-container{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
                gap: 1.5rem;
                justify-content: center;
                align-items: flex-start;
                padding: 2rem 0;
                
                .box{
                    a{
                        display: block;
                        font-size: 0.9rem;
                        color: grey;
                        text-decoration: underline;
                        margin-bottom: 0.4rem;
                    }
                }
            }
        }
        
    }
    
    @media (max-width: 590px) {
        .Footer{
            background-color: black;
            color: grey;
            padding: 2rem;

            .Footer-section{
                margin: 0 auto;
                max-width: 1200px;

                .quest-contact{
                    color: grey;
                    font-size: 0.8rem;
                    padding: 5rem 0;
                }
                
                .form-container{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
                    gap: 1.5rem;
                    justify-content: center;
                    align-items: center;
                }
            }

        }
    }
    
`;

export default Foteerstyle;