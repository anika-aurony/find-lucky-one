import React, { useState } from 'react';
import Item from '../Item/Item';
import './Items.css'
import Cart from '../Cart/Cart'





    const infos = [
        
        {
          "id": "624",
          "picture": "https://img.freepik.com/free-photo/cute-brown-teddy-bear-colored-knitted-scarf-sitting-white-background_116441-7370.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 378,
          "name": "Brown Bear"
        },
        {
          "id": "97",
          "picture": "https://t4.ftcdn.net/jpg/02/40/94/79/240_F_240947973_nYiNCc1vVL9LcAZdeq8wUQy1hHyKzBSc.jpg",
          "price": 326,
          "name": "Bear with T-shirt"
        },
        {
            "id": "40",
            "picture": "https://t4.ftcdn.net/jpg/00/60/40/13/240_F_60401390_4f8kQfPFo6wAOb4XVSBd8dcnO6SZMjcH.jpg",
            "price": 326,
            "name": "Mom & Baby"
          },
        {
          "id": "64",
          "picture": "https://img.freepik.com/free-photo/watercolor-illustration-bear-sailor_467247-1369.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 388,
          "name": "Hello Bear"
        },
        {
          "id": "75",
          "picture": "https://img.freepik.com/free-photo/watercolor-illustration-bear-gives-flowers-bear_467247-1374.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 337,
          "name": "Mr & Mrs"
        },
       
          {
            "id": "62",
            "picture": "https://t4.ftcdn.net/jpg/00/25/22/63/240_F_25226306_hbson6jOaRsunuGP3Oki7agK56o3gmVE.jpg",
            "price": 326,
            "name": "Dr. Teddy"
          },
          {
            "id": "68",
            "picture": "https://t4.ftcdn.net/jpg/03/28/32/37/240_F_328323739_fwbfCrkIj7OhkOep8eA1NeYujcxYZnk4.jpg",
            "price": 393,
            "name": "Spectacles Bear"
          },
          {
            "id": "620",
            "picture": "https://t4.ftcdn.net/jpg/03/64/82/97/240_F_364829768_pEht69OtGqtUWFdG1GENvhWx6wBW3Qtj.jpg",
            "price": 372,
            "name": "Cute Teddy"
          },
          {
            "id": "625",
            "picture": "https://t4.ftcdn.net/jpg/00/90/64/77/240_F_90647754_UbkA8kptPwurBrOCsutT9Oj4QwdddE3y.jpg",
            "price": 284,
            "name": "Teddy Bear"
          },

      ]

  
    const Items = () => {
        const [carts, setCarts] = useState([]);
        
        const [result, setresult] = useState()

        const handleAddtoCart = (info) => {
            if(carts.length<4){
                const newCart = [...carts, info];
                 setCarts(newCart)
            }            
        }

        const handleToChoose = (carts) => {
            const number = carts.length;
           console.log(carts)
            const select = Math.random();
            const newResult = carts[Math.floor(select*number)]
            setresult(newResult);    
        }

        const handleToChooseAgain = (carts) => {
            carts = [];
            setCarts(carts);
            setresult();
        }


    return (
     
        <div className='containers'>
            <div className="items-container">
                
                {
                    infos.map(info => <Item key={info.id} info={info} handleAddtoCart={handleAddtoCart}></Item> )
                }

            </div>


            <div className="Selected-items">
                <Cart carts={carts} handleToChoose={handleToChoose} result={result} handleToChooseAgain={handleToChooseAgain}></Cart>
               

            </div>
        </div>
    );
};

export default Items;