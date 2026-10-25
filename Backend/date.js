// let x = 10;
// export default x;
// let name = "fiza";
// export default name;
// let x = 10;
// let y = 20;
// let z = 30;

// export default (x,y,z);

// const getdate = () => {
//     const date = new Date();
//     console.log(date);
// }

// export default getdate;

const getTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    console.log(time);
}

export default getTime;



