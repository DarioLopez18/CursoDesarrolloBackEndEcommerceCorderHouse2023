import mongoose from "mongoose";
import orderModel from "./models/order.model.js";

const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

const run = async () => {
  console.log("DB Connected Succes");

  // const result = await orderModel.insertMany([
  //   {
  //     name: "Pepperoni",
  //     size: "small",
  //     price: 19,
  //     quantity: 10,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "medium",
  //     price: 20,
  //     quantity: 20,
  //     date: "2022-01-15T18:50:30Z",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "medium",
  //     price: 20,
  //     quantity: 20,
  //     date: "2022-01-15T18:50:30Z",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "large",
  //     price: 21,
  //     quantity: 30,
  //     date: "2022-01-17T18:50:30Z",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "small",
  //     price: 12,
  //     quantity: 15,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "medium",
  //     price: 13,
  //     quantity: 50,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "large",
  //     price: 14,
  //     quantity: 10,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  //   {
  //     name: "Hawaina",
  //     size: "small",
  //     price: 17,
  //     quantity: 10,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  //   {
  //     name: "Hawaina",
  //     size: "medium",
  //     price: 18,
  //     quantity: 10,
  //     date: "2022-01-11T18:50:30Z",
  //   },
  // ]);
  // console.log(result);

  // const orders = await orderModel.find()

  // console.log(JSON.stringify(orders,null,2,'/t'))

  const orders = await orderModel.aggregate([
    //Stage 1: Filtrar ordenes por un criterio
    { $match: { size: "medium" } },
    //Stage 2: Agrupar por sabores
    {
      $group: {
        _id: "$name",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    //Stage 3:ordenar por cantidad
    {
      $sort: { totalQuantity: -1 },
    },
    //Stage 4: guardar el resultado en un documento nuevo
    {
      $group: {
        _id: 1,
        orders: { $push: "$$ROOT" },
      },
    },
    //Stage 5: generamos un nuevo objectId
    {
      $project: {
        _id: 0,
        orders: "$orders",
      },
    },
    //Stage 6: agregar los elementos a la collecion
    {
      $merge: {
        into: "reports",
      },
    },
  ]);
};

mongoose.connect(URL, { dbName: "clase09_mongo02" }).then(run);
