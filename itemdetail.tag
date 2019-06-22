<itemdetail>
    <p>{opts.name}</p>
    <p each='{number in opts.arr}'>{number}</p>
    <!-- <div each='{product in opts.product}'> -->
        <p>{opts.product.title}</p>
        <img src="{opts.product.fileUrls[0]}" alt>
        <p>{opts.product.age}</p>
        <p>{opts.product.type}</p>
        <p>{opts.product.description}</p>
        <p>{Number(opts.product.price).toLocaleString('vi')}đ</p>
</itemdetail>