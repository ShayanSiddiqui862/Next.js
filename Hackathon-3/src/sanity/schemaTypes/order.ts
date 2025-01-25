export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "firstName", type: "string", title: "First Name" },
      { name: "lastName", type: "string", title: "Last Name" },
      { name: "city", type: "string", title: "City" },
      { name: "country", type: "string", title: "Country" },
      { name: "state", type: "string", title: "State / Province" },
      { name: "postalCode", type: "string", title: "Postal Code" },
      { name: "address1", type: "string", title: "Address Line 1" },
      { name: "address2", type: "string", title: "Address Line 2" },
      { name: "email", type: "string", title: "Email" },
      { name: "phoneNumber", type: "string", title: "Phone Number" },
      { name: "message", type: "text", title: "Message" },
  
      // Order Details
      {
        name: "orderItems",
        type: "array",
        title: "Order Items",
        of: [
          {
            type: "object",
            fields: [
              { name: "productName", type: "string", title: "Product Name" },
              {name: "productImage", type:"image" ,title: "Product Image"  , options: {
                hotspot: true
              },},
              { name: "quantity", type: "number", title: "Quantity" },
              { name: "price", type: "number", title: "Price" },
            ],
          },
        ],
      },
  
      { name: "totalAmount", type: "number", title: "Total Amount" },
      { name: "orderDate", type: "datetime", title: "Order Date", options: { default: new Date().toISOString() } },
    ],
  };
  