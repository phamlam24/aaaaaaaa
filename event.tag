<event>
  <h1>Events</h1>
  <div>
    <p>{opts.name}</p>
    <p each='{number in opts.arr}'>{number}</p>
    <div each='{products in opts.event}'>
        <img src="{event.fileUrls[0]}">
        <p>{event.title}</p>
        <p>{event.date}</p>
    </div>
  </div>
</event>