$(function () {
    var motasm = [


        { name: 'Kebabpizza', price: 150, id: 12, description: 'skinka, champinjoner, räkor bacon, kronärtskocka', picture: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Pizza' },
        { name: 'Tidemanspizza', price:   200, id: 11, description: 'Tomatsås, Ost, Skinka, Köttfärs, Champinjoner (färska), Lök, Vitlök (färsk), Feferoni', picture: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Pizza' },
        { name: 'Salame piccante', price: 100, id: 10, description: 'Tomatsås, Ost, Salami, Bacon, Bearnaisesås, Tomater (färska)', picture: 'https://images.pexels.com/photos/1069449/pexels-photo-1069449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Pizza' },
        { name: 'Café Crema', price: 20, id: 9, description: 'Ett fylligt och runt kaffe med långt avslut och tydliga toner av choklad, nöt och marsipan.', picture: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Kaffe' },
        { name: 'Affogato', price: 50, id: 8, description: 'En enkel regel: Rinner det för snabbt (under 25 sekunder) har du malt kaffet för grovt.', picture: 'https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Kaffe' },
        { name: 'Bicerin', price: 97, id: 7, description: 'Säsongens utvalda jubileumskaffe är ett ekologiskt specialkaffe från kaffekollektivet ASOCASEL', picture: 'https://images.pexels.com/photos/867470/pexels-photo-867470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'Kaffe' },
        { name: 'Juice med smak av jordgubbar', price: 30, id: 6, description: 'Frisk vattenmelon med milda päron. En snäll dryck, med väldigt god smak. Drycken innehåller: 8,5 % frukt & bär och 8 % socker. Produkten är drickfärdig', picture: 'https://images.pexels.com/photos/161600/smoothie-fruit-beverage-drink-161600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'fruktjuice' },
        { name: 'Juice med smak av kiwi', price: 40, id: 5, description: 'Svalkande och smakfull dryck med härlig smak av svarta vinbär. En tidlös klassiker med mycket smak. Drycken innehåller: 6% bär och 8% tillsatt socker. Drickes väl kyld. Produkten är drickfärdig', picture: 'https://images.pexels.com/photos/1251097/pexels-photo-1251097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'fruktjuice' },
        { name: 'Juice med smak av äpple', price: 50, id: 4, description: 'Jordgubb/Lime – en uppfriskande smakkombination av solmogna jordgubbar som fått smak av skivad lime. En frisk och törstsläckande dryck under sommardagar.', picture: 'https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'fruktjuice' },
        { name: 'Truffle Cake', price: 94, id: 3, description: 'a small cake of sweetened dough, often ring-shaped or spherical with a jam or cream filling, cooked in hot fat', picture: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'kakor' },
        { name: 'Cheesecake', price: 49, id: 2, description: 'a light soft yeast cake full of small holes on the top side, eaten toasted and buttered', picture: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'kakor' },
        { name: 'Cheesecake', price: 68, id: 1, description: 'a flat spongy cake made by dropping a spoonful of batter on a griddle', picture: 'https://images.pexels.com/photos/461295/pexels-photo-461295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', man: 'kakor' },
    ];
    

    var Doc = [];

    var appendList = function (array, location) {
        var template = array.map(function (max, id) {
            return `<li class="gig col-3">
                <img src="${max.picture}" alt="">
                <div class="gig-long">
                <h4>${max.name} -
                    <span class="man">${max.man}</span> <small>${max.price}kr</small>
                 </h4>
                  <p>${max.description}</p>
                </div>
                <button type="button" id="${max.id}">Köp nu!</button>
            </li>`;
        });
        $(location).html(template);
    };

    var addToDoc = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;

        });

        Doc.push(a);
        console.log(Doc);
        var max = `
        <li class="max" id="${a.id}">
            <h4>${a.name}</h4>
            <button id="lil" type="button">köpt</button>
        </li>
        `;
        $('span.amount').text(Doc.length);
        $(location).append(max);
    };

    var removeFromDoc = function (array, removedmax) {
        array.splice(removedmax, 1);

    };

    var populateDoc = function (array, location) {
        var max = `
        <li class="max" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };


    appendList(motasm, $('.kiki'));

    $('.gig').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToDoc(motasm, +id, $('.loo'));
    });

    $('.loo').on('click', 'button', function (e) {
        var max = $(e.currentTarget).closest('li').remove();
        removeFromDoc(Doc, max);
        populateDoc(Doc, $('.loo'));
    });


});

