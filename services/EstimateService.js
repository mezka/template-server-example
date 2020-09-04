class EstimateService {
  constructor() {
    const sampleEstimate = {
      id: 0,
      presupuesto: {
        presupuestofecha: "3-9-2020",
        presupuestoid: 1,
        presupuestoseller: 5,
        presupuestopaymethod: 1,
        presupuestooc: 2,
        presupuestostringtotal: "242000",
        presupuestosubtotal: "242000",
        presupuestodiscount: "242000",
        presupuestoimpuesto: 21,
        presupuestoimpuestoprice: 21,
        presupuestototal: "242000"
      },
      client: {
        categoriafiscal: "Responsable Inscripto",
        cuit: 12345678901
      },
      products: [
        {
          productquantity: 2,
          productname: "PRODUCTO PRUEBA #1",
          productdiscount: 0,
          productprice: 15000,
          productselectedaccessories: [{      
              productquantity: 1,
              productname: "ACCESORIO PRUEBA",
              productdiscount: 0,
              productprice: 260
            }]
        },
        {
          productquantity: 1,
          productname: "PRODUCTO PRUEBA #2",
          productdiscount: 0,
          productprice: 200000
        },
        {
          productquantity: 4,
          productname: "PRODUCTO PRUEBA #3",
          productdiscount: 0,
          productprice: 3000
        }
      ]
    };

    this.estimates = [sampleEstimate];
  }

  async find () {
    return {data: this.estimates};
  }

  async create (data) {
    const estimate = {
      id: this.messages.length,
      presupuesto: data.presupuesto,
      client: data.client,
      products: data.products
    }

    this.estimates.push(estimate);
    
    return estimate;
  }
}

module.exports = EstimateService;