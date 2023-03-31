let products = [
    {
        name: `Product One`,
        price: 30,
        image_url: `/images/nightsky.jpg`,
        description: `God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.`
    },
    {
        name: `Product Two`,
        price: 50,
        image_url: `/images/nightsky.jpg`,
        description: `What do they got in there? King Kong? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows`
    },
    {
        name: `Product Three`,
        price: 100,
        image_url: `/images/nightsky.jpg`,
        description: `Checkmate... We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE!`
    }
];

let body = document.querySelector(`body`);

for(let i = 0; i < products.length; i++)
{
    body.insertAdjacentHTML(`beforeend`,  
    `<article>
          <img width="200px" src="${products[i][`image_url`]}" alt="${products[i][`name`]}"></img>
        <h1>${products[i][`name`]}</h1>
        <p>${products[i][`price`]}</p>
        <p>${products[i][`description`]}</p>
        <button product_name="${products[i][`name`]}" product_price="${products[i][`price`]}" product_image_url="${products[i][`image_url`]}" product_description="${products[i][`description`]}">ADD TO CART</button>
    </article>`)
}
