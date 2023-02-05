fetch("https://northwind.vercel.app/api/customers")
  .then(response => response.json())
  .then(data => {
    let customers = data.map(item => ({
      id: item.id,
      companyName: item.companyName,
      contactName: item.contactName,
      country: item.address.country,
      phone: item.address.phone,
      city: item.address.city,
    }));
    

    customers.map(function (item) {

        let trElement = document.createElement('tr');
    
        let tdId = document.createElement('td');
        tdId.innerHTML = item.id;
    
        let tdCompanyName = document.createElement('td');
        tdCompanyName.innerHTML = item.companyName;
    
        let tdContactName = document.createElement('td');
        tdContactName.innerHTML = item.contactName
    
            
        let tdcity = document.createElement('td');
        tdcity.innerHTML = item.city;
    
        trElement.appendChild(tdId);
        trElement.appendChild(tdCompanyName);
        trElement.appendChild(tdContactName);
        trElement.appendChild(tdcity);
    
        document.getElementById('customers').appendChild(trElement);
    
    
    })


    // kaç adet customer var?
    console.log("Customers count:", customers.length);
    
    // a ( küçük veya büyük harf) ile başlayan customer ları console a yaz
    console.log("Customers starting with 'a':", customers.filter(customer => customer.companyName[0].toLowerCase() === 'a'));
    
    // Country 'UK' olan customerları console a yaz
    console.log("Customers from UK:", customers.filter(customer => customer.country === 'UK'));
    
    // customer ları companyName e göre sırala ( sort )
    customers.sort((a, b) => (a.companyName > b.companyName) ? 1 : -1);
    console.log("Customers sorted by company name:", customers);
    
    // id si "DUMON" olan customer ı console a yaz! tek bir object
    console.log("Customer with id 'DUMON':", customers.find(customer => customer.id === "DUMON"));
    
    // Telefon numarası 1 ile başlayanları console a yaz
    console.log("Customers with phone number starting with '1ass':", customers.filter(customer => customer.phone.startsWith('(1')));
    
    // Telefon numaralarını console a aşağıdaki formatta yaz
    console.log("Phone numbers:")
    customers.filter(customer => console.log(doFormat(customer.phone)));
  });


  function doFormat(str) {
    let valid="";
    for (var i = 0; i<str.length; i++){
        if(!isNaN(str.charAt(i)) && str.charAt(i)!== " "){
            valid+=str.charAt(i);
        }
    }
    
    return valid;
  }

  