<itemdetail>
    <p>{opts.name}</p>
    <p each='{number in opts.arr}'>{number}</p>
    <div each='{product in opts.products}'>
        <p>{product.title}</p>
        <img src="{product.fileUrls[0]}" alt>
        <p>{product.age}</p>
        <p>{product.type}</p>
        <p>{product.description}</p>
        <p>{Number(product.price).toLocaleString('vi')}đ</p>
</itemdetail>