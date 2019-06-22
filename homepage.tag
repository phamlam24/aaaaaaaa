<homepage>
    <h3>All Products</h3>
    <div>
            <div>
                  <img class="slides" src="https://picsum.photos/id/290/200/300" >
                  <img class="slides" src="https://picsum.photos/id/839/200/300" >
                  <img class="slides" src="https://picsum.photos/id/497/200/300" >
            </div>
            <div>                    
              <button id='aa'>&#10094;</button>
              <button id='bb' >&#10095;</button>
            </div>

        <ul>
            <li><a href="home?type=Casual">Casual</a></li>
            <li><a href="home?type=Work">Work</a></li>
            <li><a href="home?type=Home">Home</a></li>
            <li><a href="home?type=Others">Others</a></li>
        </ul>
        <ul>
            <li><a href="home?age=Children">&lt18 Years Old</a></li>
            <li><a href="home?age=18-30">18-30</a></li>
            <li><a href="home?age=30-60">30-60</a></li>
            <li><a href="home?age=60+">60+</a></li>
        </ul>
    </div>
    <div>
        <p>{opts.name}</p>
        <p each='{number in opts.arr}'>{number}</p>
        <div each='{products in opts.products}'>
            <img src="{products.fileUrls[0]}">
            <p>{products.title}</p>
            <p>{Number(products.price).toLocaleString('vi')}đ</p>
        </div>
    </div>
</homepage>