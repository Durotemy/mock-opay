const generateInvoiceHTML = (orderData: any, transfer: any) => {
  console.log("orderData", orderData);
  console.log("transfer", transfer);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let monthIndex = today.getMonth();
  let year = today.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthName = monthNames[monthIndex];
  let formattedDate = `${day},${monthName.toUpperCase()},${year}`;

  const htmlContent = `
      <html>
        <head>
          <style>
         
            body {
              font-family: Arial, sans-serif;
            }
            h1 {
              text-align: center;
              color: #333333;
              font-size: 1.4em;
              font-weight: bold;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              border: 1px solid #999999;
            }
            table thead tr {
              display: flex;
              flex-direction: row;

            }
            table thead th,
            table tbody td {
              padding: 0.5em;
              border: 1px solid #999999;
              text-align: center;
            }
            table tbody tr:nth-child(even) {
              background-color: #f3f3f3;
            }
  
            div {
          
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: flex-end;
            }
  
            p {
              font-size: 1.2em;
              font-weight: bold;
            }
  
          
          </style>
        </head>
        <body>
        <p style="text-align: center;">Receipt</p>

        <div style = "display: flex; align-items: center; justify-content: space-between; ">
            <p>Logo</p>
            <p>Transaction Receipt</p>
        </div>

        <p style="text-align: center; font-bold"> ₦${transfer?.Amount}</p>
        <h2 style="text-align: center; ">SUCCESS</h2>
        <h3 style="text-align: center;">${formattedDate}</h3>
  
  
        
       
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10;margin-bottom: 10px;">
         <p>Recipient Details</p>
        <p style="text-align: left">${orderData?.name}</p>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10;margin-bottom: 10px;">
          <p>Sender Details</p>
          <p style="text-align: left">Emmanuel Durtotimi</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10;margin-bottom: 10px;">
          <p>Sender Details</p>
          <p style="text-align: left">${transfer?.Remark}</p>
          </div>
        </body>
      </html>
    `;
  return htmlContent;
};

{
  /* <p>Total Price: &#8358; ${orderData.total}</p> */
}
{
  /* <td>${item.cost} </td> */
}

export default generateInvoiceHTML;
