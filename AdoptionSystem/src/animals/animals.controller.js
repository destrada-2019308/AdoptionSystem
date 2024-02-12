'use strict'
import { checkUpdate } from '../utils/validator.js'
import Animal from './animals.model.js'

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test us running'})
}

export const aRegister = async(req, res) =>{
    try{
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: `register is successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Animal is not save', err: err})
    }
}
/*
export const aListar = (req, res) => {
    try{
        let animal = Animal.find({animal})
        let listAnimals = {
            name: animal.name,
            owner: animal.owner,
            race: animal.race,
            size: animal.size,
            age: animal.age
        }
        return res.send({message: `List of everything collections`, listAnimals})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to list'})
    }
}*/

export const aUpdate = async(req, res) => {
    try{
        let { id } = req.params
        let data = req.bodylet
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: `Have submitted some data that cannot be updated`})
        let updateAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedUser) return res.status(401).send({message: 'Animal not found and not update'})
        //Responde al usuario
        return res.send({message: `Update animal`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: `Error updating account`})
    }
}