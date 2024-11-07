type Circle ={
    shape: "circle";
    radius:number;
};

type Rectangle ={
    shape:"rectangle";
    width:number;
    height:number;
}

function calculateShapeArea(shape:Circle | Rectangle):number{
    if(shape.shape==="circle"){
        return Math.PI *shape.radius *shape.radius;
    }else{
        return shape.width *shape.height;
    }
}

console.log(calculateShapeArea({shape:"circle", radius:5}));
console.log(calculateShapeArea({shape:"rectangle", width:4,height:6}));