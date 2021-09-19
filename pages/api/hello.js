// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      batchNumber: "AFF45678B",
      dateProcessed: "10/10/2021",
      productName: "Savanna Tomatos",
      packager: "Luka Farms",
      location: "Lusaka, Zambia",
      managerInfo: "John Doe",
      pesticideInfo: "Pesticide Free",
      gmoStatus: "Non GMO",
      inspection: "Inspected for consuption",
      numDaysToExpire: "18",
      freshNess: "Fresh",
      halaalCert: "Certified",
    }
  )
}
