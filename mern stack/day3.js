//promises
/*const myPromise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition=false
        if(condition){
            resolve("Success!");
        }
        else{
            reject("error:something went wrong")
        }
    },2000)
})
console.log("start");
myPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("end")
})*/
/*function fetchData(){
    return  new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
            resolve(response.json())
        })
    })
}
fetchData()
.then(data=>console.log(data))
.catch(error=>console.error(error))
 */
/*async function fetchData(){
    try{
        var response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        var json =await response.json()
        return json
    }catch(err){
        console.error(err)
    }
}
fetchData().then(res =>console.log(res))
const root=document.getElementsById('root')
root.render()*/
const user=[{
    id:1,
    age:22,
    name:"karnan"
},{
    id:2,
    age:19,
    name:"arjunan",
},
{
    id:3,
    age:21,
    name:"bheeman",

}]
function agesort(p1,p2){
    return p2.age-p1.age
}
user.sort(agesort)
console.log(user)

