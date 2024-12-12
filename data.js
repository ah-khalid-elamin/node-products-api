const products = [
    {
      id: 1,
      name: 'Product A',
      description: 'A high-quality product.',
      price: 49.99,
      image: 'https://example.com/product-a.jpg',
      category: 'Electronics',
      rating: 4.8,
      reviews: 30,
      specifications: {
        screenSize: '6.5 inches',
        processor: 'Octa-core',
        storage: '128GB'
      }
    },
    {
      id: 2,
      name: 'Product B',
      description: 'A stylish and comfortable product.',
      price: 29.99,
      image: 'https://example.com/product-b.jpg',
      category: 'Clothing',
      rating: 4.2,
      reviews: 15,
      material: {
        fabric: 'Cotton',
        color: 'Blue'
      }
    },
    {
      id: 3,
      name: 'Product C',
      description: 'A versatile and durable product.',
      price: 39.99,
      image: 'https://example.com/product-c.jpg',
      category: 'Home Goods',
      rating: 4.5,
      reviews: 20,
      features: {
        capacity: '5L',
        power: '1000W'
      }
    },
    {
      id: 4,
      name: 'Product D',
      description: 'A luxurious and relaxing product.',
      price: 99.99,
      image: 'https://example.com/product-d.jpg',
      category: 'Beauty',
      rating: 4.9,
      reviews: 40,
      ingredients: {
        activeIngredient: 'Vitamin E',
        naturalExtract: 'Aloe Vera'
      }
    },
    {
      id: 5,
      name: 'Product E',
      description: 'A powerful and efficient product.',
      price: 69.99,
      image: 'https://example.com/product-e.jpg',
      category: 'Tools',
      rating: 4.7,
      reviews: 25,
      specifications: {
        voltage: '220V',
        power: '1500W'
      }
    },
    {
      id: 6,
      name: 'Product F',
      description: 'A fun and educational product.',
      price: 19.99,
      image: 'https://example.com/product-f.jpg',
      category: 'Toys',
      rating: 4.3,
      reviews: 10,
      features: {
        ageRange: '3-8 years',
        batteryLife: '6 hours'
      }
    },
    {
      id: 7,
      name: 'Product G',
      description: 'A healthy and delicious product.',
      price: 12.99,
      image: 'https://example.com/product-g.jpg',
      category: 'Food',
      rating: 4.6,
      reviews: 18,
      nutrition: {
        calories: 150,
        protein: '10g'
      }
    },
    {
      id: 8,
      name: 'Product H',
      description: 'A stylish and practical product.',
      price: 34.99,
      image: 'https://example.com/product-h.jpg',
      category: 'Accessories',
      rating: 4.4,
      reviews: 12,
      material: {
        leatherType: 'Genuine Leather',
        color: 'Black'
      }
    },
    {
      id: 9,
      name: 'Product I',
      description: 'A powerful and versatile product.',
      price: 79.99,
      image: 'https://example.com/product-i.jpg',
      category: 'Electronics',
      rating: 4.9,
      reviews: 35,
      specifications: {
        screenSize: '7.2 inches',
        processor: 'Octa-core',
        storage: '256GB'
      }
    },
    {
      id: 10,
      name: 'Product J',
      description: 'A comfortable and supportive product.',
      price: 49.99,
      image: 'https://example.com/product-j.jpg',
      category: 'Furniture',
      rating: 4.7,
      reviews: 22,
      material: {
        woodType: 'Oak',
        finish: 'Polished'
      }
    },
    {
      id: 11,
      name: 'Product K',
      description: 'A fun and creative product.',
      price: 14.99,
      image: 'https://example.com/product-k.jpg',
      category: 'Hobbies',
      rating: 4.1,
      reviews: 8,
      features: {
        kitIncludes: 'Paints, Brushes, Canvas',
        difficultyLevel: 'Beginner'
      }
    },
    {
      id: 12,
      name: 'Product L',
      description: 'A healthy and refreshing product.',
      price: 8.99,
      image: 'https://example.com/product-l.jpg',
      category: 'Beverages',
      rating: 4.5,
      reviews: 16,
      ingredients: {
        flavor: 'Berry',
        naturalSweetener: 'Stevia'
      }
    },
    {
      id: 13,
      name: 'Product M',
      description: 'A durable and reliable product.',
      price: 59.99,
      image: 'https://example.com/product-m.jpg',
      category: 'Outdoor',
      rating: 4.8,
      reviews: 28,
      specifications: {
        waterResistance: 'IPX7',
        batteryLife: '10 hours'
      }
    },
    {
      id: 14,
      name: 'Product N',
      description: 'A stylish and elegant product.',
      price: 79.99,
      image: 'https://example.com/product-n.jpg',
      category: 'Jewelry',
      rating: 4.9,
      reviews: 32,
      material: {
        metal: 'Silver',
        gemstone: 'Diamond'
      }
    },
    {
      id: 15,
      name: 'Product O',
      description: 'A fun and educational product.',
      price: 24.99,
      image: 'https://example.com/product-o.jpg',
      category: 'Games',
      rating: 4.3,
      reviews: 11,
      features: {
        playerCount: '2-4',
        playtime: '30 minutes'
      }
    }
  ];
  
module.exports = products;