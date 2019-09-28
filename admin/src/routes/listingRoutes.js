const router = require("express").Router;
const Axios = require("axios");

router.get('/',async(req,res)=>{ 
    let data = await Axios.get('http://localhost:8000/api/listings');
    let listings = data.data.results;
    res.render('tableView',{
        listings
    });
})

router.get('/edit/:id',async(req,res)=>{
    let data = await Axios.get('http://localhost:8000/api/listings/'+req.params.id);
    let listing = data.data.listing;
    res.render('edit',{
        listing
    })
})

router.post('/:id',async(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    await Axios.put('http://localhost:8000/api/listings/'+id,{
        ...body
    });

    res.redirect('/listings');

})

router.get('/delete/:id',async(req,res)=>{
    let id = req.params.id;
    
    try{
        await Axios.delete('http://localhost:8000/api/listings/'+id);
    }catch(err){
        console.log(err);
        res.redirect('/listings?status=error')
        return;
    }
    res.redirect('/listings?status=success')
})
