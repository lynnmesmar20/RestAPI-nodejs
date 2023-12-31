import { v4 as uuidv4 } from 'uuid';
let users =[];
export const createUser = (req ,res)=>{
  
    const user = req.body;
    users.push({...user, id : uuidv4()});
    res.send(`User with the name ${user.firstname} added to database`);
 
 }
export const getUser = (req , res) =>{
   
    res.send(users);
 }
 export const getSpecificUser = (req,res)=>
 {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
 
    res.send(foundUser);
 }
 export const deleteUser = (req,res) =>{
    const {id} = req.params;
    if(users.length>0){
     users= users.filter((user) => user.id !== id);
    }
    res.send(`User with the id ${id} has been deleted from the database`);
 
 }
 export const updateUser =( req, res) =>{
    const {id} = req.params;
    const {firstname , lastname , age} = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);
    if(firstname) userToBeUpdated.firstname= firstname;
    if(lastname)  userToBeUpdated.lastname = lastname;
    if(age) userToBeUpdated.age= age;
    res.send(`user with the ${id} has been updated`);
}