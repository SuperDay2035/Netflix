import styled from "styled-components";

const Accordionstyle = styled.div`
 
    .Wrapper{
        display: flex;
        justify-content: center;
        background-color: black;
        width: 100%;
        padding: 2rem;
        color: white;
        
        
        
        .accordion{
            width: 1100px;
            
            h1{
                text-align: center;
                font-size: 2rem;
                padding: 2rem 0;
            }
            .item{
                cursor: pointer;
                background-color: #2D2D2D;
                margin-bottom: 5px;
                padding: 1rem;
                height: auto;
                
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                 
                    p{
                        font-size: 1.2rem;
                    }
                }
                
                .content{
                    height: 0;
                    margin-top: 1rem;
                    display: none;
                    transition: linear 1s;
            
                }
                
                .content.show{
                    height: auto;
                    display: block;
                    max-height: 9999px;
                    transition: linear 1s;
                
                }
                
            }
            
            
        }
        
        .sign{
            text-align: center;
            padding: 2rem;
            
            h4{
                font-size: 1rem;
            }
            
            .sign-up{
               margin-top: 1rem;

                input{
                    background-color: #0F0F0F;
                    border: 1px solid grey;
                    padding: 1rem;
                    font-size: 1rem;
                    color: white;
                    width: 24rem;
                }  
                
                button{
                    margin-left: 1rem;
                    background-color: red;
                    color: white;
                    padding: 0.5rem;
                    font-size: 1.5rem;
                }
                
            }
            
        }

    
    }
  
   


    @media (max-width: 768px) {

        .Wrapper{
            display: flex;
            justify-content: center;
            background-color: black;
            width: 100%;
            padding: 1rem;
            color: white;



            .accordion{
                width: 1100px;

                h1{
                    text-align: center;
                    font-size: 1.5rem;
                    padding: 2rem 0;
                }
                .item{
                    cursor: pointer;
                    background-color: #2D2D2D;
                    margin-bottom: 5px;
                    padding: 1rem;
                    height: auto;

                    .title{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 0.9rem;

                        p{
                            font-size: 1.1rem;
                        }
                        
                    }

                    .content{
                        height: 0;
                        margin-top: 1rem;
                        display: none;
                        transition: linear 1s;
                        font-size: 0.9rem;

                    }

                    .content.show{
                        height: auto;
                        display: block;
                        max-height: 9999px;
                        transition: linear 1s;

                    }

                }


            }

            .sign{
                text-align: center;
                padding: 2rem;

                h4{
                    font-size: 0.9rem;
                }

                .sign-up{
                    margin-top: 1rem;

                    input{
                        background-color: #0F0F0F;
                        border: 1px solid grey;
                        padding: 0.5rem;
                        font-size: 1rem;
                        color: white;
                        width: 17rem
                    }

                    button{
                        margin-left: 1rem;
                        background-color: red;
                        color: white;
                        padding: 0.5rem;
                        font-size: 1.2rem;
                    }

                }

            }
            
        }


    }
    @media (max-width: 590px) {

        .Wrapper{
            display: flex;
            justify-content: center;
            background-color: black;
            width: 100%;
            padding: 1rem;
            color: white;



            .accordion{
                width: 1100px;

                h1{
                    text-align: center;
                    font-size: 1.3rem;
                    padding: 2rem 0;
                }
                .item{
                    cursor: pointer;
                    background-color: #2D2D2D;
                    margin-bottom: 5px;
                    padding: 1rem;
                    height: auto;

                    .title{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 0.8rem;

                        p{
                            font-size: 1rem;
                        }
                        
                    }

                    .content{
                        height: 0;
                        margin-top: 1rem;
                        display: none;
                        transition: linear 1s;
                        font-size: .8rem;

                    }

                    .content.show{
                        height: auto;
                        display: block;
                        max-height: 9999px;
                        transition: linear 1s;

                    }

                }


            }

            .sign{
                text-align: center;
                padding: 2rem;

                h4{
                    font-size: 1rem;
                }

                .sign-up{
                    margin-top: 1rem;

                    input{
                        background-color: #0F0F0F;
                        border: 1px solid grey;
                        padding: 0.5rem;
                        font-size: 1rem;
                        color: white;
                        width: 14rem;
                    }

                    button{
                        margin-left: 1rem;
                        background-color: red;
                        margin-top: 1rem;
                        color: white;
                        padding: 0.5rem;
                        font-size: 1.2rem;
                    }

                }

            }
        }


    }
    @media (max-width: 450px) {

        .Wrapper{
            display: flex;
            justify-content: center;
            background-color: black;
            width: 100%;
            padding: 1rem;
            color: white;



            .accordion{
                width: 1100px;

                h1{
                    text-align: center;
                    font-size: 1.3rem;
                    padding: 2rem 0;
                }
                .item{
                    cursor: pointer;
                    background-color: #2D2D2D;
                    margin-bottom: 5px;
                    padding: 1rem;
                    height: auto;

                    .title{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 0.8rem;

                        p{
                            font-size: 1rem;
                        }
                        
                    }

                    .content{
                        height: 0;
                        margin-top: 1rem;
                        display: none;
                        transition: linear 1s;
                        font-size: .8rem;

                    }

                    .content.show{
                        height: auto;
                        display: block;
                        max-height: 9999px;
                        transition: linear 1s;

                    }

                }


            }

            .sign{
                text-align: center;
                padding: 2rem;

                h4{
                    font-size: 1rem;
                }

                .sign-up{
                    margin-top: 1rem;

                    input{
                        background-color: #0F0F0F;
                        border: 1px solid grey;
                        padding: 0.5rem;
                        font-size: 1rem;
                        color: white;
                        width: 100%;
                    }

                    button{
                        margin-left: 1rem;
                        background-color: red;
                        margin-top: 1rem;
                        color: white;
                        padding: 0.5rem;
                        font-size: 1.2rem;
                    }

                }

            }
        }


    }
    
`;

export default Accordionstyle;