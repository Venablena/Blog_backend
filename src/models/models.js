console.log("models are running");
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../assets/db_posts.json')
let allPosts = readDB(filePath)
const uuid = require('uuid/v4')

////CRUD FUNCTIONS/////
function getAll() {
  //return readDB(filePath)
  return allPosts
}

function create(post){
  const id = uuid()
  const newPost = {id, ...post}
  //const oldPosts = readDB(filePath)
  //const postArray = [...allPosts]
  allPosts.push(newPost)
  writeDB(filePath, allPosts)
  return JSON.stringify(newPost)
}

function getOne(id){
  //const allPosts = readDB(filePath)
  return allPosts.find(post => {
    return post.id === id
  })
}

function destroy(id){
  const postToDelete = getOne(id)
  allPosts.splice(allPosts.indexOf(postToDelete), 1)
  return writeDB(filePath, allPosts)
}

/////HELPER FUNCTIONS/////
function readDB(text){
  const post = JSON.parse(fs.readFileSync(text, 'utf-8'))
  return post
}

function writeDB(path, text){
  return fs.writeFileSync(path, JSON.stringify(text))
}

///////EXPORTS////////
module.exports = {
  getAll,
  create,
  getOne,
  destroy
}
