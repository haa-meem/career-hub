const addToDb=id=>{
    let applyCart;

    const appliedJob=localStorage.getItem('apply-cart');
    if(appliedJob){
        applyCart=JSON.parse(appliedJob);
    }
    else{
        applyCart={};
    }
    const quantity=applyCart[id];
    if(quantity){
        const newQuantity =quantity+1;
        applyCart[id]=newQuantity;
}
    else{
        applyCart[id]=1;
    }
    localStorage.setItem('apply-cart',JSON.stringify(applyCart));
}

export {addToDb}