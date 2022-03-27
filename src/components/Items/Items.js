import React from 'react';
import Item from '../Item/Item';
import './Items.css'



const Items = () => {
    // const infos = [
    //     {id:1, image: 'https://static-01.daraz.com.bd/p/e167148111320354907100a06ed492ff.jpg', name: "teddy", price: 240 },
    //     {id:2,  name: "teddy", price: 530 },
    //     {id:3,  name: "teddy", price: 220 },
    //     {id:4,  name: "teddy", price: 290 },
    //     {id:5,  name: "teddy", price: 310 },
    //     {id:6,  name: "teddy", price: 940 },
    //     {id:7,  name: "teddy", price: 240 },
    //     {id:8,  name: "teddy", price: 380 },
    //     {id:9,  name: "teddy", price: 720 }

    // ]

    const infos = [
        {
          "id": "62404f95bf3466c0f2b5f648",
          "picture": "https://t4.ftcdn.net/jpg/03/28/32/37/240_F_328323739_fwbfCrkIj7OhkOep8eA1NeYujcxYZnk4.jpg",
          "price": 393,
          "name": "Spectacles Bear"
        },
        {
          "id": "62404f95df707eb4be53f40e",
          "picture": "https://t4.ftcdn.net/jpg/03/64/82/97/240_F_364829768_pEht69OtGqtUWFdG1GENvhWx6wBW3Qtj.jpg",
          "price": 372,
          "name": "Cute Teddy"
        },
        {
          "id": "62404f95d89398e3ed2c70a5",
          "picture": "https://t4.ftcdn.net/jpg/00/90/64/77/240_F_90647754_UbkA8kptPwurBrOCsutT9Oj4QwdddE3y.jpg",
          "price": 284,
          "name": "Teddy Bear"
        },
        {
          "id": "62404f9505f603bcad78dabe",
          "picture": "https://img.freepik.com/free-photo/cute-brown-teddy-bear-colored-knitted-scarf-sitting-white-background_116441-7370.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 378,
          "name": "Browm Bear"
        },
        {
          "id": "62404f959f80a5141fe45e24",
          "picture": "https://img.freepik.com/free-photo/watercolor-illustration-bear-sailor_467247-1369.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 388,
          "name": "Hello Bear"
        },
        {
          "id": "62404f95a7cb0482e9f80335",
          "picture": "https://img.freepik.com/free-photo/watercolor-illustration-bear-gives-flowers-bear_467247-1374.jpg?size=338&ext=jpg&uid=R67583841&ga=GA1.2.847666869.1645108997",
          "price": 337,
          "name": "Mr & Mrs"
        },
        {
          "id": "62404f95bedd0e92970ed3ac",
          "picture": "https://t4.ftcdn.net/jpg/02/40/94/79/240_F_240947973_nYiNCc1vVL9LcAZdeq8wUQy1hHyKzBSc.jpg",
          "price": 326,
          "name": "Bear with T-shirt"
        },
        {
            "id": "62404f95bedd0e92970ed3ac",
            "picture": "https://t4.ftcdn.net/jpg/00/60/40/13/240_F_60401390_4f8kQfPFo6wAOb4XVSBd8dcnO6SZMjcH.jpg",
            "price": 326,
            "name": "Mom & Baby"
          },
          {
            "id": "62404f95bedd0e92970ed3ac",
            "picture": "https://t4.ftcdn.net/jpg/00/25/22/63/240_F_25226306_hbson6jOaRsunuGP3Oki7agK56o3gmVE.jpg",
            "price": 326,
            "name": "Dr. Teddy"
          }
      ]
    return (
        <div className='containers'>
            <div className="items-container">
                
                {
                    infos.map(info => <Item key={info.id} info={info}></Item> )
                }

            </div>
            <div className="Selected-items">
                <h3>Selected Items</h3>

            </div>
        </div>
    );
};

export default Items;