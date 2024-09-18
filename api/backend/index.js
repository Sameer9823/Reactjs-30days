import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
          "id": 1,
          "name": "Product A",
          "price": 19.99,
          "image": "https://images.pexels.com/photos/28186197/pexels-photo-28186197/free-photo-of-a-woman-with-an-umbrella-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 2,
          "name": "Product B",
          "price": 29.99,
          "image": "https://images.pexels.com/photos/28223601/pexels-photo-28223601/free-photo-of-a-black-and-white-photo-of-clothes-hanging-on-a-line.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 3,
          "name": "Product C",
          "price": 15.99,
          "image": "https://images.pexels.com/photos/28121234/pexels-photo-28121234/free-photo-of-black-and-white-photograph-of-a-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 4,
          "name": "Product D",
          "price": 25.49,
          "image": "https://images.pexels.com/photos/28279101/pexels-photo-28279101/free-photo-of-grand-central-terminal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 5,
          "name": "Product E",
          "price": 35.00,
          "image": "https://images.pexels.com/photos/19558011/pexels-photo-19558011/free-photo-of-a-walkway-in-a-park-with-traditional-red-lanterns.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 6,
          "name": "Fish",
          "price": 40.00,
          "image": "https://images.pexels.com/photos/28238934/pexels-photo-28238934/free-photo-of-orange-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 7,
          "name": "Pinepple",
          "price": 22.99,
          "image": "https://images.pexels.com/photos/28080029/pexels-photo-28080029/free-photo-of-black-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 8,
          "name": "Grapes",
          "price": 50.00,
          "image": "https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 9,
          "name": "Banana",
          "price": 12.50,
          "image": "https://images.pexels.com/photos/28201015/pexels-photo-28201015/free-photo-of-a-large-rock-on-a-hill-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          "id": 10,
          "name": "Apple",
          "price": 45.99,
          "image": "https://images.pexels.com/photos/27496315/pexels-photo-27496315/free-photo-of-mother-working-on-loom-and-daughter-sitting-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      ]

      if(req.query.search){
        const filteredProducts = products.filter(product => product.name.includes(req.query.search.toLowerCase()));

        res.send(filteredProducts);

        return;
      }

      setTimeout(() => {
        res.send(products);
      }, 3000)
      
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})