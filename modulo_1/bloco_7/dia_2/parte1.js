const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  }
  customerInfo(order);
  
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const modifierName = order.name = 'Luiz Silva';
    const modifierPayment = order.payment.total = '50,50';
    console.log(`Olá ${modifierName}, o total do seu pedido de mussarella, calabresa e Coca-Cola Zero é de R$ ${modifierPayment}.`); 
  }
  orderModifier(order);

  //No gabarito ele criou constantes q troco a chave marquerita por muzarella e chamou a coca-cola zero, p depois colocar essas constants no template literal.
  //Só p lmebrar p pegar o valor das chavese das bebidas:
  const pizzas = Object.keys(order.order.pizza);
  console.log(pizzas);
  const drinks = order.order.drinks.coke.type;
  console.log(drinks);

