const express = require('express')
const queryHelper = require('../../utilities/query')
const Project = require('./project.model')

const router = express.Router()

router.get('/all', (req, res) => {
  let where = req.query.where || ''
  where = where.replace('project_id', 't3.project_id')
  queryHelper.queryAndResponse({
    sql: Project.getAllProjects() + where,
    req: req,
    res: res
  })
})

router.get('/all-pid', (req, res) => {
  queryHelper.queryAndResponse({
    sql: 'select project_id, project_name from projects',
    req: req,
    res: res
  })
})

router.get('/filter', (req, res) => {
  const filterList = req.query
  queryHelper.queryAndResponse({
    sql: Project.filterProjects(filterList),
    req: req,
    res: res
  })
})

router.post('/delete', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Project.deleteProject(data),
    req: req,
    res: res
  })
})

router.post('/insert', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Project.insertProject(data),
    req: req,
    res: res
  })
})

router.post('/update', (req, res) => {
  const data = req.body.data
  const oldData = req.body.oldData
  queryHelper.queryAndResponse({
    sql: Project.updateProject(data, oldData),
    req: req,
    res: res
  })
})
// --------------- FOR PROJECT LIST ---------------------------
router.get('/list/all', (req, res) => {
  queryHelper.queryAndResponse({
    sql: Project.getAllProjectsList() + (req.query.where || ''),
    req: req,
    res: res
  })
})

router.post('/list/insert', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Project.insertProjectList(data),
    req: req,
    res: res
  })
})

router.get('/list/filter', (req, res) => {
  const filterList = req.query
  queryHelper.queryAndResponse({
    sql: Project.filterProjectsList(filterList),
    req: req,
    res: res
  })
})

router.post('/list/delete', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Project.deleteProjectList(data),
    req: req,
    res: res
  })
})

router.post('/list/update', (req, res) => {
  const data = req.body.data
  const oldData = req.body.oldData
  queryHelper.queryAndResponse({
    sql: Project.updateProjectList(data, oldData),
    req: req,
    res: res
  })
})



module.exports = router
