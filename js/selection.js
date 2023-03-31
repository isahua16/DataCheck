let product_selected_string = Cookies.get(`product_selected`);
let product_selected = JSON.parse(product_selected_string);

let body = document.querySelector(`body`);

body.insertAdjacentHTML(`beforeend`,
    `<article>
        <img width="200px" src="${product_selected[`image_url`]}" alt="${product_selected[`name`]}"></img>
        <h1>${product_selected[`name`]}</h1>
        <p>$ ${product_selected[`price`]}</p>
        <p>${product_selected[`description`]}</p>
        <button class="remove_from_cart_button" 
            product_name="${product_selected[`name`]}" 
            product_price="${product_selected[`price`]}" product_image_url="${product_selected[`image_url`]}" product_description="${product_selected[`description`]}">
            REMOVE
        </button>
    </article>`
)