import React from 'react'
import { Route } from 'react-router-dom'
import Filter from '../components/Admin/Filter'
import AdminTable from '../components/Admin/AdminTable'

function Admin() {
  return (
    <div>
        <Filter />
        <AdminTable />
    </div>
  )
}

export default Admin